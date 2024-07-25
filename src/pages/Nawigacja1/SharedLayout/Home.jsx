import { Link, Outlet } from "react-router-dom";

export function Home() {

    return (
        <>
            <h1>Home</h1>
            <nav>
                <Link to="/react-helpCreatingWebsite/">Home</Link>
                <Link to="/react-helpCreatingWebsite/about">About</Link>
                <Link to="/react-helpCreatingWebsite/products">Products</Link>
                <Link to="/react-helpCreatingWebsite/old-components">Old Components</Link>
            </nav>
            <Outlet />
        </>
    );
};