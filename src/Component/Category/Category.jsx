import Product from "../Product/Product";

function Category({ products }) {
  const categories = [];
  const arr = [];
  products.map((e) => {
    return arr.push(e.category);
  });
  arr.map((e, i) => {
    if (!categories.includes(e)) {
      categories.push(e);
    }
    return categories;
  });
  return (
    <>
      {categories.map((category, i) => (
        <div key={i} className="category">
          <h2 className="title">{category}</h2>
          {products.map((product, i) =>
            product.category === category ? (
              <Product key={i} productItem={product} showCloseBtn={false} />
            ) : null
          )}
        </div>
      ))}
      
    </>
  );
}

export default Category;
