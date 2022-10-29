import { useEffect, useState, createContext } from "react";
import "./app.scss";
import Cart from "./Component/Cart/Cart";
import Category from "./Component/Category/Category";
import { products } from "./data";

export const Wraper = createContext();

function App() {
  const [data, setData] = useState(products);
  const [keySearch, setKeySearch] = useState("");
  const [filter, setFilter] = useState(false);
  const [cartDb, setCartDb] = useState([]);

  useEffect(
    () =>
      setData(
        products.filter((product) => {
          return product.name.toLowerCase().includes(keySearch.toLowerCase());
        })
      ),
    [keySearch]
  );

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setFilter(false);
    }
    setKeySearch(e.target.value);
  };

  const handleAddPoduct = (product) => {
    if (!cartDb.includes(product)) {
      setCartDb([...cartDb, product]);
    } else {
      product.quantity += 1;
      setCartDb([...cartDb, product]);
    }
  };

  const handleDeltePoduct = (product) => {
    // console.log("delete");
    product.quantity = 1;
    setCartDb(cartDb.filter((e) => e !== product));
  };

  const handleFilter = (e) => {
    setFilter(!filter);
    if (!filter) {
      setData(
        products.filter((product) => {
          return (
            product.stocked === true &&
            product.name.toLowerCase().includes(keySearch.toLowerCase())
          );
        })
      );
    } else {
      setData(
        products.filter((product) => {
          return product.name.toLowerCase().includes(keySearch.toLowerCase());
        })
      );
    }
  };

  const values = { handleAddPoduct, handleFilter, handleDeltePoduct, cartDb };

  return (
    <>
      <Wraper.Provider value={values}>
        <div className="container">
          <div class="form-group">
            <div className="search">
              {/* <label for="key-search">Tìm kiếm</label> */}
              <input
                type="text"
                class="form-control"
                id="key-search"
                placeholder="What do you want?"
                value={keySearch}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="filter">
              <input
                type="checkbox"
                class="form-control"
                id="key-filter"
                placeholder="What do you want?"
                checked={filter}
                onChange={(e) => handleFilter(e)}
                // hidden
              />
              <label className="btn" htmlFor="key-filter">
                Chỉ hiện thị sản phẩm còn hàng trong kho
              </label>
            </div>
          </div>
          <Cart cartDb={cartDb}></Cart>
          <Category products={data}></Category>
        </div>
      </Wraper.Provider>
    </>
  );
}

export default App;
