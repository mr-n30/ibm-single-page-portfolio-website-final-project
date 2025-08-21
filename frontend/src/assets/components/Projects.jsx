export default function Projects() {
    const projects = [
        { "title": "Chatbot", "description": "Developed a secure website integrated with chatbot for an automobile client using HTML, CSS, JavaScript, and IBM Watson Assistant" },
        { "title": "Sentiment Analyzer", "description": "Develooped and deployed a sentiment analyzer for the box reviews section of an eCommerce platform using IBM NLU" },
        { "title": "Fashion Website", "description": "Created a styled multi-page website for a new player in the fashion industry and integrated it with a shopping cart, using stripe for the payment gateway" },
    ]

    return (
        <section id="projects" className="projects">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-list-container">
                {
                    projects.map((project, index) => (
                        <>
                            <h2 className="project-title">{project.title}</h2>
                            <ul className="project-item" key={index}>
                                <li className="project-description">{project.description}</li>
                            </ul>
                        </>
                    ))
                }
            </div>
        </section>
    )
}