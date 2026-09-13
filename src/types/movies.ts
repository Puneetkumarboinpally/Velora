export type Movies = {
  id: number;
  title: string;
  genre_ids: number[];
  overview: string;
  backdrop_path: string | null;
};

export type MovieReference = {
  page: number;
  results: Movies[];
  total_pages: number;
  total_results: number;
};
