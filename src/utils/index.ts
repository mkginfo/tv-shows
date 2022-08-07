import type {
  Show,
  Genre,
  GenreShow,
  GenreListShow,
} from "@/models/tvmaze.model";

export const sortByRating = (a: Show, b: Show) =>
  (a?.rating ?? 0) > (b?.rating ?? 0) ? -1 : 1;

function formatShows(shows: Show[] = []): Show[] {
  return (
    shows
      // .filter((show: Show) => show.image?.original || show.image?.medium)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .sort((a: Show, b: Show) =>
        (a?.rating ?? 0) > (b?.rating ?? 0) ? -1 : 1
      )
  );
}

function mapShowsByGenre(shows: Show[] = [], genres: Genre[] = []): GenreShow {
  // creates an object where the key is the genre and the value a list of shows
  const byGenre = {} as any;

  for (const genre of genres) {
    byGenre[genre] = shows.filter((show: Show) => show.genres.includes(genre));
  }

  return byGenre;
}

function extractGenres(data: Show[]): Genre[] | undefined {
  if (data.length === 0) {
    return;
  }
  const newArray = data
    .map((item: Show) => item.genres)
    .reduce((acc: any, curr: any) => {
      return acc.concat(curr);
    });
  return [...new Set(newArray)];
}

function generateNewListByGenre(data: Show[], genres: Genre[]) {
  if (data.length === 0) {
    return;
  }
  if (genres.length === 0) {
    return;
  }
  const newArray = [];
  for (let i = 0; i < genres.length; i++) {
    const obj: GenreListShow = {};
    for (let j = 0; j < data.length; j++) {
      obj[genres[i]] = data.filter((item) => {
        return item.genres.includes(genres[i]);
      });
    }
    newArray.push(obj);
  }
  return new Set(newArray);
}

export { formatShows, mapShowsByGenre, extractGenres, generateNewListByGenre };
