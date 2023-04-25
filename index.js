import url from "url";
import path from "path";
import ejs from "ejs";
import Fastify from "fastify";
import cors from "@fastify/cors";
import view from "@fastify/view";
import helmet from "@fastify/helmet";
import fastifyStatic from "@fastify/static";
import multipart from "@fastify/multipart";

import app from "./app/app.js";
import { errorHandler } from "./utils/errorHandler.js";

const fastify = Fastify({
    bodyLimit: 314572800,
    logger: true,
});

fastify.register(cors);
fastify.register(helmet);
fastify.register(multipart);
fastify.register(view, { engine: { ejs: ejs } });
fastify.register(fastifyStatic, {
    root: path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "public"),
});

fastify.register(app);

fastify.setErrorHandler(errorHandler);
fastify.listen({ port: 8083 });
