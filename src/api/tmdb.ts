const BASE_URL = "https://api.themoviedb.org/3";

const ACCESS_KEY = import.meta.env.VITE_TMDB_ACCESS_KEY;

const getPopularBannerMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${ACCESS_KEY}`,
      accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch popular movies for hero section");
  }
  const data = await response.json();

  return data;

  console.log(data);
};

export default getPopularBannerMovies;
