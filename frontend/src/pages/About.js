import aboutPic from './img/about.png'; 
import shot1 from './img/shot1.jpg';
import shot2 from './img/shot2.jpg';
import shot3 from './img/shot3.jpg';
import shot4 from './img/shot4.jpg';
import shot5 from './img/shot5.jpg';
import shot6 from './img/shot6.jpg';
import check from './img/check.png';
import community from './img/community.png'
import improve from './img/improve.png'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-img">
                    <img src={aboutPic} alt="About illustration" />
                </div>
                <div className="about-info">
                <div className="staff-heading">
                    <h2>Who are we?</h2>
                </div>
                    <p>Welcome to BLOG NAME, your go-to destination for engaging and insightful content! Since our inception in 2009, we’ve been committed to bringing you the latest trends, expert opinions, and valuable information across a range of topics.</p>
                    <p>At BLOG NAME, we believe in the power of knowledge and its ability to transform lives. Our dedicated team of writers and industry experts works tirelessly to deliver content that is not only informative but also thought-provoking and relevant to our readers.</p>
                    <p>We’re passionate about technology, lifestyle, and personal growth, and our mission is to provide you with high-quality, reliable, and up-to-date content that keeps you informed and inspired. Whether you’re here to explore new ideas, stay updated on current trends, or simply enjoy a good read, BLOG NAME has something for you.</p>
                    <p>Thank you for being part of our journey. We’re thrilled to have you with us and look forward to bringing you more great content!</p>
                </div>
            </div>

            <div className="staff-out">
                <div className="staff-heading">
                    <h2>Meet the Team</h2>
                </div>
                <div className="staff-container">
                    <div className="staff-in">
                        <img src={shot1} alt="John Doe" />
                        <p><strong>John Doe</strong></p>
                        <p><cite>Founder</cite></p>
                    </div>
                    <div className="staff-in">
                        <img src={shot2} alt="Jane Doe" />
                        <p><strong>Jane Doe</strong></p>
                        <p><cite>Founder</cite></p>
                    </div>
                    <div className="staff-in">
                        <img src={shot3} alt="Allison Smith" />
                        <p><strong>Allison Smith</strong></p>
                        <p><cite>SWE Lead</cite></p>
                    </div>
                    <div className="staff-in">
                        <img src={shot4} alt="Emma Willson" />
                        <p><strong>Emma Willson</strong></p>
                        <p><cite>Marketing Director</cite></p>
                    </div>
                    <div className="staff-in">
                        <img src={shot5} alt="Isabella Lee" />
                        <p><strong>Isabella Lee</strong></p>
                        <p><cite>Head of HR</cite></p>
                    </div>
                    <div className="staff-in">
                        <img src={shot6} alt="Alex James" />
                        <p><strong>Alex James</strong></p>
                        <p><cite>Product Manager</cite></p>
                    </div>
                </div>
            </div>

            <div className="mission-out">
                <div className="staff-heading">
                    <h2>Our Mission</h2>
                </div>
                <div className="mission-container">
                    <div className="mission-in">
                        <img src={check} alt="Check"/>
                        <p><strong>Quality Content</strong></p>
                        <p>Providing high-quality, reliable, and up-to-date content.</p>
                    </div>
                    <div className="mission-in">
                        <img src={community} alt="Community"/>
                        <p><strong>Community Engagement</strong></p>
                        <p>Building a community of like-minded individuals.</p>
                    </div>
                    <div className="mission-in" alt="Our Mission">
                        <img src={improve} alt="Improvement" />
                        <p><strong>Continuous Improvement</strong></p>
                        <p>Constantly improving and innovating to serve you better.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
