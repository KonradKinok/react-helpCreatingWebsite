
import { Routes, Route, NavLink } from "react-router-dom";
import { lazy, useEffect } from "react";
import { SharedLayout } from "../Nawigacja1/SharedLayout/SharedLayout";
import { useDispatch } from 'react-redux';
import { About } from "../Nawigacja1/SharedLayout/About/About"
import { Home } from "../Nawigacja1/SharedLayout/Home";
import { ProductDetails } from "../Nawigacja1/SharedLayout/ProductDetails";
import { Products } from "../Nawigacja1/SharedLayout/Products";
import { Mission } from "../Nawigacja1/SharedLayout/About/Mission";
import { Team } from "../Nawigacja1/SharedLayout/About/Team";
import { Reviews } from "../Nawigacja1/SharedLayout/About/Reviews";

import { OldComponents } from "../../components/OldComponents/OldComponents";
import { AdminLayout } from "../Nawigacja1/AdminLayout/AdminLayout";
import { AdminMain } from "../Nawigacja1/AdminLayout/AdminMain";
import { Dashboard } from "../Nawigacja1/AdminLayout/Dashboard";
import { Sales } from "../Nawigacja1/AdminLayout/Sales";
import { Customers } from "../Nawigacja1/AdminLayout/Customers";
import { NotFound } from "../Nawigacja1/NotFound/NotFound";
import { Container, Header, StyledLink } from "./AllPages.styled";
import style from "./AllPages.module.scss";
// import 'modern-normalize';
import "./AllPages.scss";
const ReduxLayout = lazy(() => import("../Redux/ReduxLayout").then(module => ({ default: module.ReduxLayout })));
const ReduxMain = lazy(() => import("../Redux/ReduxMain").then(module => ({ default: module.ReduxMain })));
// const ReduxSimple = lazy(() => import("../Redux/ReduxSimple").then(module => ({ default: module.ReduxSimple })));
const Redux_Toolkit = lazy(() => import("../Redux/Redux_Toolkit").then(module => ({ default: module.Redux_Toolkit })));
// const Redux_Asynchronic = lazy(() => import("../Redux/ReduxAsynchronic").then(module => ({ default: module.Redux_Asynchronic })));
const Redux_Asynchronic = lazy(() => import("../Redux/ReduxAsynchronic"));
const ComponentsLayout = lazy(() => import("../Components/ComponentsLayout").then(module => ({ default: module.ComponentsLayout })));
const ComponentsMain = lazy(() => import("../Components/ComponentsMain").then(module => ({ default: module.ComponentsMain })));
const PaginationApp = lazy(() => import("../../components/Paginations/Pagination0/PaginationApp").then(module => ({ default: module.PaginationApp })));

//LoginUser
import { PrivateRouteUser } from "../UserLogin/components/PrivateRouteUser";
import { RestrictedRouteUser } from "../UserLogin/components/RestrictedRouteUser";
import { refreshUser } from "../UserLogin/components/reduxUser/authUser/operationsUser.auth";
import { useAuthUser } from "../UserLogin/components/hooksUser";
const LayoutUser = lazy(() => import("../UserLogin/components/LayoutUser"));
const HomeUser = lazy(() => import("../UserLogin/pages/HomeUser"));
const LoginUser = lazy(() => import("../UserLogin/pages/LoginUser"));
const TasksUser = lazy(() => import("../UserLogin/pages/TasksUser"));
const RegisterUser = lazy(() => import("../UserLogin/pages/RegisterUser"));

// import { ReduxLayout } from "../Redux/ReduxLayout";
// import { ReduxMain } from "../Redux/ReduxMain";
// import { ReduxSimple } from "../Redux/ReduxSimple";
// const About = lazy(() => import("../Nawigacja1/SharedLayout/About/About"));
// const Home = lazy(() => import("../Nawigacja1/SharedLayout/Home"));

// const ProductDetails = lazy(() => import("../Nawigacja1/SharedLayout/ProductDetails"));
// const Products = lazy(() => import("../Nawigacja1/SharedLayout/Products"));
// const Mission = lazy(() => import("../Nawigacja1/SharedLayout/About/Mission"));
// const Team = lazy(() => import("../Nawigacja1/SharedLayout/About/Team"));
// const Reviews = lazy(() => import("../Nawigacja1/SharedLayout/About/Reviews"));
// const OldComponents = lazy(() => import("../../components/OldComponents/OldComponents"));
// const AdminLayout = lazy(() => import("../Nawigacja1/AdminLayout/AdminLayout"));
// const AdminMain = lazy(() => import("../Nawigacja1/AdminLayout/AdminMain"));
// const Dashboard = lazy(() => import("../Nawigacja1/AdminLayout/Dashboard"));
// const Sales = lazy(() => import("../Nawigacja1/AdminLayout/Sales"));
// const Customers = lazy(() => import("../Nawigacja1/AdminLayout/Customers"));
// const NotFound = lazy(() => import("../Nawigacja1/NotFound/NotFound"));

export function AllPages() {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuthUser();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return (
        <>
            <Container>
                <Header>
                    <nav>
                        <StyledLink to="/" end>
                            Home
                        </StyledLink>
                        <StyledLink to="about">About</StyledLink>
                        <StyledLink to="products">Products</StyledLink>
                        <StyledLink to="old-components">OldComponents</StyledLink>
                        <StyledLink to="admin">Admin</StyledLink>
                        <StyledLink to="redux">Redux</StyledLink>
                        <StyledLink to="components">Components</StyledLink>
                        <StyledLink to="layout-user">Layout User</StyledLink>
                        <div className="navbar">
                            <NavLink to="/react-helpCreatingWebsite/" end>
                                Home
                            </NavLink>
                            <NavLink to="/react-helpCreatingWebsite/about">About</NavLink>
                            <NavLink to="/react-helpCreatingWebsite/products">Products</NavLink>
                            <NavLink to="/react-helpCreatingWebsite/old-components">OldComponents</NavLink>
                            <NavLink to="/react-helpCreatingWebsite/admin">Admin</NavLink>
                            <NavLink to="/react-helpCreatingWebsite/components">Components</NavLink>
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
                    <Route path="/" element={<SharedLayout />}>
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

                        <Route path="admin" element={<AdminLayout />}>
                            <Route index element={<AdminMain />} />
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="sales" element={<Sales />} />
                            <Route path="customers" element={<Customers />} />
                        </Route>

                        <Route path="redux" element={<ReduxLayout />}>
                            <Route index element={<ReduxMain />} />
                            {/* <Route path="redux-simple" element={<ReduxSimple />} /> */}
                            <Route path="redux-toolkit" element={<Redux_Toolkit />} />
                            <Route path="redux-asynchronic" element={<Redux_Asynchronic />} />
                            Redux_Asynchronic
                        </Route>
                        <Route path="components" element={<ComponentsLayout />}>
                            <Route index element={<ComponentsMain />} />
                            <Route path="paginations" element={<PaginationApp />} />

                        </Route>
                        {/* {isRefreshing ? (<b>Refreshin user...</b>) : */}

                        (
                        <Route path="layout-user" element={<LayoutUser />}>
                            <Route index element={<HomeUser />} />
                            <Route
                                path="register"
                                element={
                                    <RestrictedRouteUser redirectTo="/layout-user/tasks" component={<RegisterUser />} />
                                }
                            />
                            <Route
                                path="login"
                                element={
                                    <RestrictedRouteUser redirectTo="/layout-user/tasks" component={<LoginUser />} />
                                }
                            />
                            <Route
                                path="tasks"
                                element={
                                    <PrivateRouteUser redirectTo="/layout-user/login" component={<TasksUser />} />
                                }
                            />
                        </Route>
                        )
                    </Route>


                    <Route path="*" element={<NotFound />} />
                </Routes>



            </Container >
        </>
    );
};