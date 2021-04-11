import React from "react";
import styles from "./FeedPhotoItem.module.css";
import ImageLoading from "../../../Helper/ImageLoading/ImageLoading";

const FeedPhotoItem = ({ photo, setModalphoto }) => {
  function handleClick() {
    setModalphoto(photo);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <ImageLoading src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotoItem;
