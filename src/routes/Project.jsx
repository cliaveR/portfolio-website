import {createFileRoute} from '@tanstack/react-router'
import ProjectPage from "../pages/projectPage/Project.jsx";

export const Route = createFileRoute('/Project')({
    component: ProjectPage,
})

