import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import "./Location.css";
export default function Location() {
  const [data, setData] = useState();
  const location = useLocation();
  const state = location.state.characters;

  let { name } = useParams();

  let character = state.find((char) => char.name === name);
  useEffect(() => {
    getLocation();
  }, []);

  function getLocation() {
    axios.get(`${character.location.url}`).then((response) => {
      setData({
        ...response.data,
      });
    });
  }
  console.log(data);
  if (data) {
    return (
      <div className="Character">
        <h1>Hey, I'm {name}!</h1>
        <img src={character.image} />
        <p>{character.name}</p>
        <p>I'm from {data.name}</p>
        <p>Type: {data.type}</p>
        <p>Dimension: {data.dimension}</p>
        <p>Population: {data.residents.length}</p>
      </div>
    );
  }
  return (
    <>
      {" "}
      <img src={character.image} />
      <p>Error</p>
    </>
  );
}
