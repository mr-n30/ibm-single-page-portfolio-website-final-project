import { useState } from 'react';

export default function Recommendations() {
    const [username, setUsername] = useState('');
    const [textarea, setTextarea] = useState('');
    const [recommendations, setRecommendations] = useState([
        (<article className="recommendation-item">
            <h1 className='comment-by'>Comment by: Winston Scott</h1>
            <p className="recommendation-text">"John is a dedicated and skilled developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are exceptional."</p>
        </article>),
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setRecommendations((prev) => {
            return [...prev,
            (<article className="recommendation-item">
                <h1 className='comment-by'>Comment by: {username}</h1>
                <p className="recommendation-text">"{textarea}"</p>
            </article>)
            ]
        })
        setUsername('');
        setTextarea('');
    }

    return (
        <section id="recommendations" className="recommendations">
            <h1 className="recommendations-title">Recommendations</h1>
            <section className="recommendation-item-container">
                {recommendations.map(item => item)}
            </section>
            <form className='recommendation-form' onSubmit={handleSubmit}>
                <fieldset className='recommendation-fieldset'>
                    <legend>Leave a Recommendation</legend>
                    <input required maxlength={24} type="text" name="username" placeholder="Name" className="recommendation-name" onChange={e => setUsername(e.target.value)} />
                    <textarea required maxLength={1024} placeholder="Message..." className="recommendation-textarea" name="recommendation" onChange={e => setTextarea(e.target.value)}></textarea>
                    <button type="submit" className="recommendation-button">Submit</button>
                </fieldset>
            </form>
        </section>
    )
}