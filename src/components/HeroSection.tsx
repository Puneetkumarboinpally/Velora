import { useEffect } from "react";
import getBannerPhotos from "../api/tmdb";

const HeroSection = () => {
  useEffect(() => {
    getBannerPhotos().then((data) => {
      console.log(data);
    });
  }, []);
  return <div>HeroSection</div>;
};

export default HeroSection;
