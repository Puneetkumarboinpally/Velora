type NavItem = {
  id: number;
  title: string;
  path: string;
};

export const NavLinks: NavItem[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Genres",
    path: "/genres",
  },
  {
    id: 3,
    title: "Country",
    path: "/counties",
  },
  {
    id: 4,
    title: "Movies",
    path: "/movies",
  },
  {
    id: 5,
    title: "Tv Series",
    path: "/series",
  },
];
