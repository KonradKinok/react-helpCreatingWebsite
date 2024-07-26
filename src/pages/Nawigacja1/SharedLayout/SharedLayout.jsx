import { Outlet, Link } from "react-router-dom";
import { Container, Header, Logo } from "../../AllPages/AllPages.styled";
import { Suspense } from "react";
export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <Logo>
                    <span role="img" aria-label="computer icon">
                        💻
                    </span>{" "}
                    GoMerch Store
                </Logo>
                <nav>
                    <Link to="/react-helpCreatingWebsite/">Home</Link>
                    <Link to="/react-helpCreatingWebsite/about">About</Link>
                    <Link to="/react-helpCreatingWebsite/products">Products</Link>
                </nav>
            </Header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </Container>
    );
};

