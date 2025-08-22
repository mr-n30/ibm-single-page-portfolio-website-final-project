export default function Navbar() {
    return (
        <nav>
            <div className="user-info">
                <p className="name">John Wick</p>
                <p className="email">test@example.com</p>
                <p className="phone">123-456-7890</p>
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