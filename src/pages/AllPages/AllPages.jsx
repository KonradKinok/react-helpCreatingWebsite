
import { Routes, Route, NavLink } from "react-router-dom";
import { SharedLayout } from "../SharedLayout";
import { Home } from "../Nawigacja1/Home/Home";
import { About } from "../Nawigacja1/About/About";
import { Products } from "../Nawigacja1/Products/Products";
import { ProductDetails } from "../Nawigacja1/ProductDetails/ProductDetails";
import { OldComponents } from "../../components/OldComponents/OldComponents";
import { Mission } from "../Nawigacja1/About/Mission";
import { Team } from "../Nawigacja1/About/Team";
import { Reviews } from "../Nawigacja1/About/Reviews";
import { NotFound } from "../Nawigacja1/NotFound/NotFound";
import { Container, Header, StyledLink } from "./AllPages.styled";
import style from "./AllPages.module.scss";
import "./AllPages.scss";

export function AllPages() {

    return (
        <>
            <Container>
                <Header>
                    <nav>
                        <StyledLink to="/react-helpCreatingWebsite/" end>
                            Home
                        </StyledLink>
                        <StyledLink to="/react-helpCreatingWebsite/about">About</StyledLink>
                        <StyledLink to="/react-helpCreatingWebsite/products">Products</StyledLink>
                        <StyledLink to="/react-helpCreatingWebsite/old-components">OldComponents</StyledLink>

                        <div className="navbar">
                            <NavLink to="/react-helpCreatingWebsite/" end>
                                Home
                            </NavLink>
                            <NavLink to="/react-helpCreatingWebsite/about">About</NavLink>
                            <NavLink to="/react-helpCreatingWebsite/products">Products</NavLink>
                            <NavLink to="/react-helpCreatingWebsite/old-components">OldComponents</NavLink>
                        </div>
                    </nav>
                </Header>
                {/* <Routes>
                    <Route path="/react-helpCreatingWebsite/" index element={<Home />} />
                    <Route path="/react-helpCreatingWebsite/about" element={<About />} />
                    <Route path="/react-helpCreatingWebsite/products" element={<Products />} />
                    <Route path="/react-helpCreatingWebsite/products/:id" element={<ProductDetails />} />
                    <Route path="/react-helpCreatingWebsite/old-components" element={<OldComponents />} />
                    <Route path="*" element={<NotFound />} />
                </Routes> */}
                <Routes>
                    <Route path="/react-helpCreatingWebsite/" element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        {/* <Route path="/react-helpCreatingWebsite/about" >
                        <Route index element={<About />} />
                        <Route path="mission" element={<Mission />} />
                        <Route path="team" element={<Team />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route> */}
                        <Route path="about" element={<About />}>
                            <Route path="mission" element={<Mission />} />
                            <Route path="team" element={<Team />} />
                            <Route path="reviews" element={<Reviews />} />
                        </Route>
                        <Route path="products" >
                            <Route index element={<Products />} />
                            <Route path=":id" element={<ProductDetails />} />
                        </Route>
                        <Route path="old-components" element={<OldComponents />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Container >
        </>
    );
};