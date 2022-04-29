export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: "My Favorites",
        data: series.filter((item) => item.favorited),
      },
      {
        title: "Documentaries",
        data: series.filter((item) => item.genre === "documentaries"),
      },
      {
        title: "Comedies",
        data: series.filter((item) => item.genre === "comedies"),
      },
      {
        title: "Children",
        data: series.filter((item) => item.genre === "children"),
      },
      {
        title: "Crime",
        data: series.filter((item) => item.genre === "crime"),
      },
      {
        title: "Feel Good",
        data: series.filter((item) => item.genre === "feel-good"),
      },
    ],
    films: [
      {
        title: "My Favorites",
        data: films.filter((item) => item.favorited),
      },
      {
        title: "Drama",
        data: films.filter((item) => item.genre === "drama"),
      },
      {
        title: "Thriller",
        data: films.filter((item) => item.genre === "thriller"),
      },
      {
        title: "Children",
        data: films.filter((item) => item.genre === "children"),
      },
      {
        title: "Suspense",
        data: films.filter((item) => item.genre === "suspense"),
      },
      {
        title: "Romance",
        data: films.filter((item) => item.genre === "romance"),
      },
    ],
  };
}
