import "./styles/header.css"
import {Link} from "@tanstack/react-router";

export default function Header() {
    return (
        <header className="header">
            <ul className="header-links">

                <li>
                    <h3>
                        <h3>
                            <Link to="/">Home</Link></h3>
                    </h3>
                </li>
                <li>
                    <h3>
                        <h3>
                            <Link to="/Project">PROJECTS</Link>
                        </h3>
                    </h3>
                </li>


                <li>
                    <h3>
                        <h3>
                            <Link to="/current-work">Current Work</Link>
                        </h3>
                    </h3>
                </li>
            </ul>
        </header>
    )
}