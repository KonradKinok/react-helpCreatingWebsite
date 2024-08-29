import { Outlet, Link } from "react-router-dom";
import { Container, Header, Logo } from "../AllPages/AllPages.styled";
import { Suspense } from "react";
export const ComponentsLayout = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <Link to="paginations">Paginations</Link>

                </nav>
            </Header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </Container>
    );
};