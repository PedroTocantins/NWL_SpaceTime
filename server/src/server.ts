/* eslint-disable prettier/prettier */
import fastify from "fastify";
import cors from '@fastify/cors'
import { memoriesRoutes } from "./routes/memories";

const app = fastify();
// HTTP Methods: get, post, put, delete, patch
app.register(cors, {
    orgin: true,
})
app.register(memoriesRoutes)



app.listen({
    port: 3333,
}).then(() => {
    console.log("🚀HTTP server running on http://localhost:3333");
});
