import "./style.css"
import img from "../../../assets/img.png";
import img1 from "../../../assets/image_database.png"
import img2 from "../../../assets/img_2.png"
import {Link} from "@tanstack/react-router";

export default function Projects() {
    return (
        <div className="project-container">
            <h2 className="Projects-title">Projects</h2>

            <div className="project-grid">

                <div className="project-card">
                    <Link to="/Project" className="no-underline">
                        <h3 className="Project-title">Smart Roads </h3>
                        <img src={img2} alt="_blank"/>
                        <p>
                            Smart Roads is a Mobile Application for Philippine Road Damage Detection Using
                            Cloud-Deployed
                            RT-DETRv2
                            and GIS Mapping
                        </p>
                    </Link>
                </div>


                <div className="project-card">
                    <Link to="/Project">
                        <h3 className="Project-title">Delivery Analytics on Last-Mile </h3>
                        <img src={img} alt="_blank"/>
                        <p>
                            Developed an interactive Power BI dashboard analyzing 331K+ delivery orders, tracking an
                            average
                            delivery
                            duration of 185.8 minutes across multiple Chinese cities including Shanghai, Hangzhou,
                            Jilin,
                            and Yantai.
                        </p>
                    </Link>
                </div>


                <div className="project-card">
                    <Link to="/Project">
                        <h3 className="Project-title">Student database Pipeline</h3>
                        <img src={img1} alt="_blank"/>
                        <p>
                            Designed and implemented a student data migration pipeline that transferred records from
                            legacy Excel-based files into a PostgreSQL database, improving data organization,
                            accessibility, and scalability while reducing manual record management.
                        </p>
                    </Link>
                </div>

            </div>
        </div>
    )
}