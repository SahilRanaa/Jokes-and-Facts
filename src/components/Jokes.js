import axios from "axios";
import React, { useState, useEffect } from "react";

const Jokes = () => {
  const [joke, setJoke] = useState("");
  const getJokes = async () => {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");

    const joke = data.value;
    setJoke(joke);
  };

  useEffect(() => {
    getJokes();
  }, []);
  return (
    <div className="conainer">
      <div className="mid-container">
        <div className="main">
          <h2 className="heading">Chuck Norris Jokes</h2>
          <p className="joke">{joke}</p>
        </div>
      </div>
    </div>
  );
};

export default Jokes;
