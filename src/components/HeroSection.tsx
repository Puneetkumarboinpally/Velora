import { useEffect } from "react";
import getPopularBannerMovies from "../api/tmdb";

const HeroSection = () => {
  useEffect(() => {
    getPopularBannerMovies().then((data) => {
      console.log(data);
    });
  }, []);
  return <div>HeroSection</div>;
};

export default HeroSection;
