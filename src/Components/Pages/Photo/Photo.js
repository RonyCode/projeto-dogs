import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url } = request(url);
  }, []);

  return (
    <div>
      <h1>photo </h1>
    </div>
  );
};

export default Photo;
