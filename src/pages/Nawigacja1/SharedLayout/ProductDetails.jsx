import { useParams, useLocation } from "react-router-dom";
import { getProductById } from "../FakeApi/FakeApi";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const ProductDetails = () => {
    const { id } = useParams();
    const product = getProductById(id);
    console.log("ProductDetails", "Id", { id })
    const location = useLocation();
    // const backLinkHref = location.state?.from ?? "/react-helpCreatingWebsite/products";
    const backLinkHref = location.state?.from;
    console.log("ProductDetails: useLocation()", location)
    return (

        <main>
            <h1>ProductDetails</h1>
            <BackLink to={backLinkHref}>Back to products</BackLink>
            <img src="https://via.placeholder.com/960x240" alt="" />
            <div>
                <h2>
                    Product - {product.name} - {id}
                </h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
                    sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
                    a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
                    atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
                    praesentium ipsum quos unde voluptatum?
                </p>
            </div>
        </main>
    );
};

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

export const BackLink = ({ to, children }) => {
    return (
        <StyledLink to={to}>
            <HiArrowLeft size="24" />
            {children}
        </StyledLink>
    );
};