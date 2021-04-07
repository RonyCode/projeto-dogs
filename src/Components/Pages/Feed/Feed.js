import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = () => {
  const [modalPhoto, setModalphoto] = React.useState(null);
  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalphoto={setModalphoto} />
      )}
      <FeedPhotos setModalphoto={setModalphoto} />
    </div>
  );
};

export default Feed;
