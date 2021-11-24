import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react/cjs/react.development";

const Facts = () => {
  const [fact, setFact] = useState("");

  const getFacts = async () => {
    const { data } = await axios.get(
      "https://asli-fun-fact-api.herokuapp.com/"
    );

    const fact = data.data.fact;
    setFact(fact);
  };

  useEffect(() => {
    getFacts();
  }, []);

  return (
    <div className="conainer">
      <div className="mid-container">
        <div className="main">
          <h2 className="heading">Random Facts</h2>
          <p className="joke">{fact}</p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
