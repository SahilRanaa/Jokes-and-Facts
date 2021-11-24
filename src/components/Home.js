import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="s-container">
        <p className="text-center  h2 text-white text-uppercase py-3">
          Choose One
        </p>

        <div className="buttons text-center">
          <Link className="btn btn-primary mx-2" to="/jokes">
            Jokes
          </Link>
          <Link className="btn btn-danger mx-2" to="/facts">
            Facts
          </Link>
        </div>
        <p className="text-center h4 py-2 text-white text-uppercase">
          Refresh the page for more
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
