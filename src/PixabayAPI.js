import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import axios from "axios";

function PixabayAPI({ query }) {
  const [image, setImage] = useState([]);
  //const pixAPIKEY = REACT_APP_PIXABAY_TOKEN;
  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get(
        `https://pixabay.com/api/?key=43429373-f32987f9e677429801cae9d3d&q=${query}&image_type=photo&pretty=true`
      );
      setImage(response.data.hits[1]);
    };
    fetchImage();
  }, [query]);
  return <div>{<Image src={image.webformatURL} />}</div>;
}

export default PixabayAPI;
