import { Outlet, Link } from "react-router-dom";
import { Container, Header, Logo } from "../../AllPages/AllPages.styled";

export const AdminLayout = () => {
    return (
        <Container>
            <Header>
                <h3>Menu Admin:</h3>
                <nav>
                    <Link to="dashboard">Dashboard</Link>
                    <Link to="sales">Sales</Link>
                    <Link to="customers">Customers</Link>
                </nav>
            </Header>
            <Outlet />
        </Container>
    );
};