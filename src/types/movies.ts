export type Movies = {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  popularity: number;
  backdrop_path: string | null;
};

export type MovieReference = {
  page: number;
  results: Movies[];
  total_pages: number;
  total_results: number;
};
