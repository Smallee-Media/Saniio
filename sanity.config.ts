import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas"

const config = defineConfig({
    projectId: "ljypmdqh",
    dataset: "production",
    title: "My Story Website",
    apiVersion: "2023-06-06",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config;