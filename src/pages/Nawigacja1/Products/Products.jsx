import { ProductList } from "../ProductList/ProductList";
import { getProducts } from "../FakeApi/FakeApi";
export function Products() {
    const products = getProducts();
    console.log();
    return (
        <>
            <main>
                <h1>Products</h1>
                <ProductList products={products} />
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