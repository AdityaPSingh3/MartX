import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
import Product from "./Product";
import "./Home.css";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { getProduct ,clearErrors } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  // const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  // console.log(products);
  return (
    <Fragment>
      {
      loading ? (
        <Loader/>
        ) : (
          <Fragment>
          <MetaData title="MartX" />
          <div className="banner">
            <p>Welcome to MartX</p>
            <h1>Find Amazing Products Below</h1>
            <a href="#container">
              <button>
                Scroll
                {/* Scroll <CgMouse/> */}
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
                  products.map((product) => (
                    <Product key={product._id} product={product} />
                  ))}; 
    
          </div>
        </Fragment>
        )}
    </Fragment>
  );
};
export default Home;
