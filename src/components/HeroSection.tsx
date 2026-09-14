import { useEffect, useState } from "react";
import type { Movies } from "../types/movies";
import getBannerPhotos from "../api/tmdb";

const HeroSection = () => {
  const [bannerPhotos, setBannerPhotos] = useState<Movies[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    getBannerPhotos().then((data) => {
      console.log(data.results);

      setBannerPhotos(data.results);
    });
  }, []);

  const PreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide < bannerPhotos.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden ">
      {bannerPhotos.map((photo) => (
        <div key={photo.id} className="h-full w-screen shrink-0">
          <div className="relative h-full w-full">
            <img
              src={`https://image.tmdb.org/t/p/original${photo.backdrop_path}`}
              alt={photo.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl px-10 text-white">
                <h2 className="mb-4 text-5xl font-bold">{photo.title}</h2>
                <div className="flex gap-2 items-center">
                  <p className="p-1 bg-yellow rounded font-bold">HD</p>
                  <p>•</p>
                  <p className="py-1 px-2 bg-dim rounded font-medium">
                    {photo.release_date}
                  </p>
                  <p>•</p>
                  <p className="py-1 px-2 bg-dim rounded font-medium">
                    Popularity: {photo.popularity}
                  </p>
                </div>

                <p className="text-lg">{photo.overview}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
