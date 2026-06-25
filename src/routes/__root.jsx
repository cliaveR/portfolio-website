import {createRootRoute, Outlet} from "@tanstack/react-router";
import Header from "../components/Header.jsx";
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools";
import Footer from "../components/Footer.jsx";


export const Route = createRootRoute({
    component: () => {
        return (
            <>
                <Header/>
                <main style={{flex: 1}}>
                    <Outlet/>
                </main>
                <TanStackRouterDevtools/>
                <Footer/>
            </>
        )
    }
})