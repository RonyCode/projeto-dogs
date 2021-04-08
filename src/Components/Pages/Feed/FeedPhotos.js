import React from "react";
import FeedPhotoItem from "./FeedPhotoItem";
import useFetch from "../../../Hooks/useFetch";
import { PHOTOS_GET } from "../../../api/api";
import Error from "../../../Helper/Error/Error";
import Loading from "../../../Helper/Loading/Loading";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ setModalphoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({
        page: 1,
        total: 6,
        user: 0,
      });
      const { json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <div>
        <ul className={`${styles.feed} animeLeft`}>
          {data.map((photo) => (
            <FeedPhotoItem
              key={photo.id}
              photo={photo}
              setModalphoto={setModalphoto}
            />
          ))}
        </ul>
      </div>
    );
  } else return null;

  return <FeedPhotoItem />;
};

export default FeedPhotos;
