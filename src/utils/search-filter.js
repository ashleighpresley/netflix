export default function searchFilter({ series, films, searchTerm }) {
  return {
    series: [
      {
        title: "Search Results",
        data: series.filter(
          (item) =>
            item.title.includes(searchTerm) ||
            item.description.includes(searchTerm)
        ),
      },
    ],
    films: [
      {
        title: "Search Results",
        data: films.filter(
          (item) =>
            item.title.includes(searchTerm) ||
            item.description.includes(searchTerm)
        ),
      },
    ],
  };
}
