import { format } from 'date-fns';
import FastifyCookie from "@fastify/cookie";
import FastifySession from "@fastify/session";
import FastifyFormBody from "@fastify/formbody";

import ApiRoutes from "./api.js";

import * as TNTApi from "../utils/api.js";
import { CustomError } from "../utils/errorHandler.js";

const authHandler = async (req, res) => {
    if (!req.session?.authenticated?.auth) {
        throw new CustomError({ name: "AuthError" });
    }
};

export default async (fastify) => {
    fastify.register(FastifyCookie);
    fastify.register(FastifyFormBody);
    fastify.register(FastifySession, {
        cookieName: "sessionId",
        secret: "a secret with minimum length of 32 characters",
        cookie: { secure: false },
        expires: 1800000,
    });

    fastify.register(ApiRoutes, { prefix: "api" });

    /**
     * @route   GET /profile/:user_id
     * @desc    get user resumen profile page
     */
    fastify.route({
        method: "GET",
        url: "/profile/:user_id",
        handler: async (req, res) => {
            const id = req.params.user_id;

            const result = await TNTApi.getProfileById(id);

            const status = result.data.status

            if(status === "active"){

                return res.view("/templates/resume.ejs", { data: result.data });
            
            }else if(status === "pending"){
               
                return res.view("/templates/active-request.ejs")
            
            }
        },
    });

    /**
     * @route   GET /form
     * @desc    get form page
     */
    fastify.route({
        method: "GET",
        url: "/form",
        handler: async (req, res) => {
            return res.view("/templates/form.ejs");
        },
    });

    /**
     * @route   GET /admin/login
     * @desc    get admin login page
     */
    fastify.route({
        method: "GET",
        url: "/admin/login",
        handler: async (req, res) => {
            return res.view("/templates/login.ejs");
        },
    });

    /**
     * @route   POST /admin/login
     * @desc    login admin user
     */
    fastify.route({
        method: "POST",
        url: "/admin/login",
        handler: async (req, res) => {
            const { email, password } = req.body;

            const result = await TNTApi.loginAdmin({ email, password });

            if (result.statusCode === 500) {
                throw new CustomError({ name: "AuthError" });
            }

            req.session.authenticated = { auth: true, token: result.data };
            return res.redirect("/admin/dashboard");
        },
    });

    /**
     * @route   POST /admin/login
     * @desc    login admin user
     */
    fastify.route({
        method: "POST",
        url: "/admin/logout",
        handler: async (req, res) => {
            if (req.session?.authenticated?.auth) {
                req.destroySession((err) => {
                    if (err) {
                        throw new CustomError({ name: "Error" });
                    } else {
                        return res.redirect("/");
                    }
                });
            } else {
                return res.redirect("/");
            }
        },
    });

    /**
     * @route   GET /admin/dashboard
     * @desc    get admin dashboard page
     */
    fastify.route({
        method: "GET",
        url: "/admin/dashboard",
        preHandler: authHandler,
        handler: async (req, res) => {
            const result = await TNTApi.getAllProfiles();
            let userList = result.data;

            userList = userList.map((user) => {

                return {
                    ...user,
                    created_at: format(new Date(user.created_at),"dd / MMM / yyyy")

                }
            })

            return res.view("/templates/admin.ejs", { data: userList });
        },
    });

    /**
     * @route   GET /error
     * @desc    error login
     */
    fastify.route({
        method: "GET",
        url: "/error",
        handler: async (req, res) => {
            return res.view("/templates/Error.ejs");
        },
    });



    /**
     * @route   GET /userdata
     * @desc    userdata
     */
    fastify.route({
        method: "GET",
        url: "/userdata/:user_id",
        handler: async (req, res) => {
            const id = req.params.user_id;
            const result = await TNTApi.getProfileById(id);
            let userbase = result.data;
            

            userbase.created_at = format(new Date(userbase.created_at),"dd/MMM/yyyy")


            // console.log(userbase);
            return  res.view("/templates/userdata.ejs",{ data: userbase});   
        },
    });


    /**
    * @route  GET /PDF
    * @desc   user PDF
    */

    fastify.route({
        method:"GET",
        url:"/profile/pdf/:user_id",
        handler: async (req,res)=>{
            const id = req.params.user_id;
            const result = await TNTApi.getAllProfiles(id);
            
            // console.log(result.data);

            return res.view("/templates/pdf.ejs",{data: result.data});


        }
    })


};
