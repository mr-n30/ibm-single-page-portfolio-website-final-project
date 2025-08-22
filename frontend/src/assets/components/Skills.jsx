export default function Skills() {
    const skills = [
        { "img": "assets/images/react.png", "name": "HTML", "years": "2 years" },
        { "img": "./assets/images/js.png", "name": "JavaScript", "years": "1.5 years" },
        { "img": "./assets/images/java.png", "name": "Java", "years": ".5 years" },
        { "img": "./assets/images/react.png", "name": "React", "years": "1 years" },
        { "img": "./assets/images/nodejs.png", "name": "Node.js", "years": "1 years" },
        { "img": "./assets/images/css.png", "name": "CSS", "years": "2 years" },
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