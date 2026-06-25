import {createFileRoute} from '@tanstack/react-router'
import CurrentWorkPage from "../pages/currentPage/CurrentWork.jsx";

export const Route = createFileRoute('/current-work')({
    component: CurrentWorkPage
})

