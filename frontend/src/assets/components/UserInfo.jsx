export default function UserInfo() {
    return (
        <section id="user-info" className="user-info">
            <img src='./src/assets/images/profile-photo.jpg' className="profile-photo" />
            <div className="intro-text-container">
                <h1 className="intro-text">Hi, I'm John Wick!👋</h1>
                <p className="user-description-paragraph">I'm a full stack developer with 2 years of experience in both application and presentation layers. I have worked on applications and microservices deployed on IBM Cloud. I am an avid user of IBM Watson Services and have worked on Watson Assistant , NLU, Sentiment analyzer to name a few.</p>
            </div>
        </section>
    )
}