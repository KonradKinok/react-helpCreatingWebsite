import { Outlet, Link } from "react-router-dom";


export const ReduxLayout = () => {
    return (
        <div>
            <div>
                <h3>Menu Redux:</h3>
                <nav>
                    <Link to="redux-simple">Redux Simple</Link>
                </nav>
                <hr />
            </div>
            <Outlet />
        </div>
    );
};