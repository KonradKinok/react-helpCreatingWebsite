import { Link, useSearchParams } from "react-router-dom";
import { Container, CardWrapper, ProductName } from "./ProductList.styled";

import { getProducts } from "../FakeApi/FakeApi";
import { Wrapper, Input, Icon, Icon2 } from "./SearchBox.styled";
export function Products() {
    const products = getProducts();
    const [searchParams, setSearchParams] = useSearchParams();
    const productName = searchParams.get("name") ?? "";

    const visibleProducts = products.filter((product) =>
        product.name.toLowerCase().includes(productName.toLowerCase())
    );

    const updateQueryString = (name) => {
        const nextParams = name !== "" ? { name } : {};
        setSearchParams(nextParams);
    };

    return (
        <>
            <main>
                <h1>Products</h1>
                <SearchBox value={productName} onChange={updateQueryString} />
                <ProductList products={visibleProducts} />
                {/* <Container>
                    {products.map((product) => (
                        <CardWrapper key={product.id}>
                            <Link to={`${product.id}`}>
                                <img src="https://via.placeholder.com/200x100" alt="" />
                                <ProductName>{product.name}</ProductName>
                            </Link>
                        </CardWrapper>
                    ))}
                </Container> */}
            </main>
        </>
    );
};

export const SearchBox = ({ value, onChange }) => {
    return (
        <Wrapper>
            <Icon2 />
            <Input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </Wrapper>
    );
};

export const ProductList = ({ products }) => {
    return (
        <Container>
            {products.map((product) => (
                <CardWrapper key={product.id}>
                    <Link to={`${product.id}`}>
                        <img src="https://via.placeholder.com/200x100" alt="" />
                        <ProductName>{product.name}</ProductName>
                    </Link>
                </CardWrapper>
            ))}
        </Container>
    );
};