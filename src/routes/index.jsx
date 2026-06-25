import {createFileRoute} from "@tanstack/react-router";
import Home from "../pages/homepage/Home.jsx";


export const Route = createFileRoute("/")({
    component: Home
})