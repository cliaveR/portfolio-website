import "./style.css"
import {Link} from "@tanstack/react-router";

export default function CurrentWorkPage() {
    return (
        <section className="current-page-container">

            {/* Current Focus */}
            <section className="work-section">
                <div className="section-title">
                    <h2>Current Focus</h2>
                    <span>What I'm actively working on</span>
                </div>

                <div className="focus-grid">


                    <article className="focus-card">
                        <span className="card-label">Learning</span>

                        <h3>Data Engineering</h3>

                        <p>
                            Expanding knowledge in pipelines, warehousing,
                            orchestration, and cloud platforms.
                        </p>
                    </article>

                    <article className="focus-card">
                        <span className="card-label">Research</span>

                        <h3>Machine Learning/Data Science</h3>

                        <p>
                            Exploring predictive models and analytical
                            techniques through hands-on projects.
                        </p>
                    </article>
                    <article className="focus-card">
                        <span className="card-label">Research</span>

                        <h3>Freelance Data Engineer</h3>

                        <p>
                            Designing and building systems for collecting, storing, and analyzing data at scale.
                        </p>
                    </article>
                </div>
            </section>

            {/* Certificates */}
            <section className="work-section">
                <div className="section-title">
                    <h2>Certificates</h2>
                    <span>Professional development & certifications</span>
                </div>

                <div className="certificate-grid">
                    <a href="https://www.linkedin.com/in/harold-laguerta-877842283/" target="_blank"
                       rel="noopener noreferrer">
                        <article className="certificate-card">
                            <h3>Data Engineer Associate</h3>
                            <p>DataCamp</p>
                        </article>
                    </a>

                    <a href="https://www.linkedin.com/in/harold-laguerta-877842283/" target="_blank"
                       rel="noopener noreferrer">
                        <article className="certificate-card">
                            <h3>Data Analytics </h3>
                            <p>Google</p>
                        </article>
                    </a>

                    <a href="https://www.linkedin.com/in/harold-laguerta-877842283/" target="_blank"
                       rel="noopener noreferrer">
                        <article className="certificate-card">
                            <h3>Kaggle Machine Learning Statistics</h3>
                            <p>Kaggle</p>
                        </article>

                    </a>
                </div>
            </section>


        </section>
    );
}