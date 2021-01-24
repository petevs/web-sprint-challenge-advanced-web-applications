import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { getColors } from '../api/getColors'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  // const getColors = () => {
  //   axiosWithAuth().get('http://localhost:5000/api/colors')
  //     .then(res => {
  //       setColorList(res.data)
  //     })
  //     .catch(err => console.log(err))
  // }

  // const refreshColors = () => getColors().then(res => {
  //   console.log(res.data)
  //   setColorList(res.data)
  // })

  const refreshColors = async () => setColorList(await getColors())

  useEffect(() => {
    refreshColors()
  },[])

  // useEffect(()=> {
  //   console.log(colorList)
  // },[colorList])

  return (
    <>
      <ColorList colors={colorList} updateColors={refreshColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
