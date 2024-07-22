
import { Link, Outlet } from "react-router-dom";

export const About = () => {
    return (
        <div>
            <h1>About page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit sint laborum fugiat rem, iste maiores soluta! Id, dignissimos quibusdam. Praesentium, enim nam atque hic exercitationem velit ullam odit eius?</p>
            <ul>
                <li>
                    <Link to="mission">Read about our mission</Link>
                </li>
                <li>
                    <Link to="team">Get to know the team</Link>
                </li>
                <li>
                    <Link to="reviews">Go through the reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};