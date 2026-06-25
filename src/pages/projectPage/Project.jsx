import "./style.css"
import img from "../../assets/img.png";
import img1 from "../../assets/image_database.png"
import img2 from "../../assets/img_2.png"

export default function ProjectPage() {
    return (
        <div className="projects-container">

            <section className="project project-left">
                <div className="project-media">

                    <a href="https://github.com/cliaveR">
                        <h2>Smart Roads</h2>
                    </a>
                    <div className="image-placeholder">
                        <img src={img2} alt="_blank"/>
                    </div>

                </div>

                <div className="project-content">
                    <p>
                        Smart Roads is a Mobile Application for Philippine Road Damage Detection Using Cloud-Deployed
                        RT-DETRv2
                        and GIS Mapping.
                        Lets Filipino commuters and road authorities instantly report and track road damage using their
                        phone's camera,
                        with AI-powered detection and a live map showing problem spots nationwide.
                        Engineered the Spring Boot backend for a Philippine road damage detection mobile app leveraging
                        cloud-deployed RT-DETRv2 and GIS mapping, with infrastructure hosted on AWS EC2, RDS, and S3.
                    </p>
                </div>
            </section>

            <section className="project project-right">
                <div className="project-media">

                    <h2>Student Database Pipeline</h2>
                    <div className="image-placeholder">
                        <img src={img1} alt="_blank"/>
                    </div>
                </div>

                <div className="project-content">
                    <p>
                        Developed an end-to-end student database pipeline to modernize record management by migrating
                        student data from legacy Excel spreadsheets into a PostgreSQL database. Built ETL processes to
                        extract, clean, validate, and transform student records, ensuring data consistency and integrity
                        during migration. Designed the PostgreSQL schema to support efficient storage and querying of
                        student information, while implementing data quality checks to identify duplicates, missing
                        values, and formatting issues. The solution streamlined data management, reduced reliance on
                        manual spreadsheet operations, and provided a scalable foundation for future reporting and
                        analytics needs.
                        <br/>
                        <b>Due to Privacy reasons I cannot show the full database pipeline</b>
                    </p>
                </div>
            </section>

            <section className="project project-left">
                <div className="project-media">

                    <a href="https://drive.google.com/file/d/1khteTxeq6G1oy8GngVJV9172S1Hnwnnf/view?usp=sharing">
                        <h2>Courier Analytics Dashboard</h2>
                    </a>
                    <div className="image-placeholder">
                        <img src={img} alt="_blank"/>
                    </div>

                </div>

                <div className="project-content">
                    <p>
                        Developed an interactive Power BI dashboard analyzing 331K+ delivery orders, tracking an average
                        delivery
                        duration of 185.8 minutes across multiple Chinese cities including Shanghai, Hangzhou, Jilin,
                        and Yantai.
                        Created DAX measures and performance analytics to evaluate courier efficiency, identify slow
                        deliveries, compare
                        city-level delivery performance, and monitor monthly trends, achieving an overall fleet
                        efficiency index of 1.00 (At
                        Average/Neutral).
                        Built geospatial and operational visualizations including delivery heat maps, courier rankings,
                        and fleet
                        benchmarking reports, enabling stakeholders to identify bottlenecks and optimize last-mile
                        delivery operations..
                    </p>
                </div>
            </section>

        </div>
    )
}