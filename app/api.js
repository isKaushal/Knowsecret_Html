import fetch from "node-fetch";

import { CustomError } from "../utils/errorHandler.js";


// const ipaddress = "http://192.168.1.239:8080";
const ipaddress = "https://api.testntrack.com";


export default async (fastify) => {
    /**
     * @route   GET /api/profile
     * @desc    get all profile list
     */
    fastify.get("/profiles", async (req, res) => {
        if (!req.session?.authenticated?.auth) {
            throw new CustomError({ name: "AuthError" });
        }

        const resp = await fetch(`${ipaddress}/api/v1/knowsecret/profiles`);

        const result = await resp.json();

        return res.send(result);
    });

    /**
     * @route   POST /api/profile/add
     * @desc    new user profile add
     */
    fastify.post("/profile/add", async (req, res) => {
        
        const body = req.body
        const bodyjson = JSON.stringify(body)

        
        const resp = await fetch(`${ipaddress}/api/v1/knowsecret/profile/add`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:bodyjson,
        });
        const result = await resp.json()
        
        console.log(result);
        console.log(req.body);
        console.log(".............................................................");
        
        return res.send({});
            
    });

    /**
     * @route   GET /api/profile/update
     * @desc    Update Profile Status
     */

    fastify.post("/profile/update",async (req, res) => {

        const body = req.body
        const bodyjson = JSON.stringify(body)


        const resp = await fetch(`${ipaddress}/api/v1/knowsecret/profile/update`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:bodyjson,
        });
        const result = await resp.json()
        console.log(result);
        console.log(bodyjson);
        
        return res.send({});

    })



    /**
     * @route   POST /api/admin/login
     * @desc    admin login
     */
    fastify.post("/admin/login", async (req, res) => {
        return res.send({});
    });

};
