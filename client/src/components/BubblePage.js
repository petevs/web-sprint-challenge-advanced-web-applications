import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  // fetch your colors data from the server when the component mounts
  const getColors = () => {
    axiosWithAuth().get('http://localhost:5000/api/colors')
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getColors()
  },[])

  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={getColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
