/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FavouritesRow from "../FavouritesRow/FavouritesRow";

function Favourites() {
  const [allFavs, setFavs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/api/favs", { credentials: "include" })
      .then((data) => data.json())
      .then((res) => setFavs(res))
      .catch(console.error);
  }, []);
  console.log(allFavs);
  return (
    <div>
      {allFavs?.map((el) => (
        <FavouritesRow key={el.id} favProduct={el.Product} setFavs={setFavs} el={el} />
      ))}
    </div>
  );
}

export default Favourites;
