const TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const getBannerPhotos = async () => {
  const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      authorization: `Bearer ${TOKEN}`,
      accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("failed to fetch Hero Banner photos");
  }
  const data = await response.json();

  return data;
};

export default getBannerPhotos;
