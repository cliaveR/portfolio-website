import "./style.css"

export default function Projects() {
    return (
        <div className="project-container">
            <h2 className="Projects-title">Projects</h2>
            <div className="project-grid">
                <div className="project-card">
                    <h3 className="Project-title">Smart Roads </h3>
                    <img src="https://picsum.photos/200" alt="_blank"/>
                    <p>
                        Smart Roads is a Mobile Application for Philippine Road Damage Detection Using Cloud-Deployed
                        RT-DETRv2
                        and GIS Mapping
                    </p>
                </div>
                <div className="project-card">
                    <h3 className="Project-title">Delivery Analytics on Last-Mile </h3>
                    <img src="https://picsum.photos/200" alt="_blank"/>
                    <p>
                        Developed an interactive Power BI dashboard analyzing 331K+ delivery orders, tracking an average
                        delivery
                        duration of 185.8 minutes across multiple Chinese cities including Shanghai, Hangzhou, Jilin,
                        and Yantai.
                    </p>
                </div>
                <div className="project-card">
                    <h3 className="Project-title">Smart Roads </h3>
                    <img src="https://picsum.photos/200" alt="_blank"/>
                    <p>
                        Lorem Upsum
                    </p>
                </div>
            </div>
        </div>
    )
}