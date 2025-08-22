export default function Skills() {
    const skills = [
        {"class":"skill-icon bg-[url(./src/assets/images/html5.png)]", "img": "./src/assets/images/html5.png", "name": "HTML", "years": "2 years" },
        {"class":"skill-icon bg-[url(./src/assets/images/js.jpeg)]", "img": "./src/assets/images/js.jpeg", "name": "JavaScript", "years": "1.5 years" },
        {"class":"skill-icon bg-[url(./src/assets/images/java.png)]", "img": "./src/assets/images/java.png", "name": "Java", "years": ".5 years" },
        {"class":"skill-icon bg-[url(./src/assets/images/react.png)]", "img": "./src/assets/images/react.png", "name": "React", "years": "1 years" },
        {"class":"skill-icon bg-[url(./src/assets/images/node.png)]", "img": "./src/assets/images/node.png", "name": "Node.js", "years": "1 years" },
        {"class":"skill-icon bg-[url(./src/assets/images/CSS3.png)]", "img": "./src/assets/images/CSS3.png", "name": "CSS", "years": "2 years" },
    ]

    return (
        <section id="skills" className="skills">
            <h1 className="skills-title">Skills</h1>
            <section className="skills-list-container">
                {
                    skills.map((skill, index) => (
                        <figure className="skill-item" key={index}>
                            <img src={skill.img} alt={skill.name} className="skill-icon" />
                            <figcaption className="skill-name">{skill.name}</figcaption>
                            <h1 className="skill-years">{skill.years}</h1>
                        </figure>
                    ))
                }
            </section>
        </section>
    )
}