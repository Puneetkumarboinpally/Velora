import { useEffect, useState } from "react";
import type { Movies } from "../types/movies";
import getBannerPhotos from "../api/tmdb";

const HeroSection = () => {
  const [bannerPhotos, setBannerPhotos] = useState<Movies[]>([]);
  useEffect(() => {
    getBannerPhotos().then((data) => {
      console.log(data.results);

      setBannerPhotos(data.results);
    });
  }, []);
  return (
    <div>
      <h1>chinnu</h1>
    </div>
  );
};

export default HeroSection;
