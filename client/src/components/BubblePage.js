import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

const fetchData = () => {
  axiosWithAuth()
  .get("/api/colors")
  .then(res => {
    //res.data
    setColorList(res.data)
  })
  .catch(error => console.log(`There was an error`, error))
}

useEffect(() => {
  fetchData();
}, [])

  

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
