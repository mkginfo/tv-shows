import type {
  Show,
  Genre,
  GenreShow,
  GenreListShow,
  ShowByGenre
} from "@/models/tvmaze.model";

function sortByRatingAverage( a: Show, b: Show ) {
  if(a?.rating !== undefined && b?.rating !== undefined){
    if ( a.rating.average < b.rating.average ){
      return 1;
    }
    if ( a.rating.average > b.rating.average ){
      return -1;
    }
  }
  return 0;
}

function shortShows(shows: Show[] = []): Show[] {
  return (
    shows
      .sort(sortByRatingAverage)
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

function extractGenres(data: Show[]): Genre[] {
  if (data.length === 0) {
    return [];
  }
  const allGenres = data
    .map((item: Show) => item.genres)
    .reduce((acc: any, curr: any) => {
      return acc.concat(curr);
    });
  return [...new Set(allGenres)];
}


// Get shows per each genre and sort them according to rating
function getShowsByGenres(allShows: Show[], genres: Genre[] = [] ): ShowByGenre[]  {
  if(!(genres.length > 0)) {
    genres = extractGenres(allShows) || ([] as Genre[]);
  }
  const showsByGenres = genres.map(genre => {
    const shows = allShows
        .filter(show => show.genres.includes(genre))
        .sort(sortByRatingAverage);
    return { genre, shows };
  });
  return showsByGenres;
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

// Get top rating shows
function getPopularShows(shows: Show[]): Show[] {
  const topRating = 9;
  let popularShows = shows.filter(show => (show?.rating !== undefined) ? (show?.rating.average >= topRating) : false);
  popularShows = shortShows(popularShows);
  return popularShows;
}


export {
  sortByRatingAverage,
  shortShows,
  mapShowsByGenre,
  extractGenres,
  getShowsByGenres,
  generateNewListByGenre,
  getPopularShows
};
