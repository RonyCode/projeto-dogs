import React from "react";
import useFetch from "../../../Hooks/useFetch";
import styles from "./FeedModal.module.css";
import { PHOTO_GET } from "../../../api/api";
import Error from "../../../Helper/Error/Error";
import Loading from "../../../Helper/Loading/Loading";
import PhotoContent from "../Photo/PhotoContent";

const FeedModal = ({ photo, setModalphoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalphoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
