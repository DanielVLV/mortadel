/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { domainAddress } from '../../../constants/api';
import FavouritesRow from "../FavouritesRow/FavouritesRow";
import styles from "./fav.module.css";

function Favourites() {
  const [allFavs, setFavs] = useState([]);

  useEffect(() => {
    fetch(`${domainAddress}/api/favs`, { credentials: "include" })
      .then((data) => data.json())
      .then((res) => setFavs(res))
      .catch(console.error);
  }, []);

  return (
    <div className={styles.favContainer}>
      {allFavs?.map((el) => (
        <FavouritesRow key={el.id} favProduct={el.Product} setFavs={setFavs} el={el} />
      ))}
    </div>
  );
}

export default Favourites;
