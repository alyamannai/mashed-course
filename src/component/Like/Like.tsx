import React from "react";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "./like.module.css";

function Like() {
  const [liked, setLiked] = useState(false);
  const handleColor = () => {
    return setLiked(!liked);
  };
  if (liked) {
    return <AiFillHeart size="4rem" color="red" onClick={handleColor} />;
  } else {
    return <AiOutlineHeart size="4rem" onClick={handleColor} />;
  }
}

export default Like;
