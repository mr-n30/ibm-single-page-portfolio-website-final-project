export default function Navbar() {
    return (
        <nav>
            <div className="user-info">
                <p className="name"><img src="./src/assets/images/home.png" /> John Wick</p>
                <p className="email"><img src="./src/assets/images/envelope.png" /> test@example.com</p>
                <p className="phone"><img src="./src/assets/images/phone.png" /> 123-456-7890</p>
            </div>
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#recommendations">Recommendations</a></li>
            </ul>
        </nav>
    )
}