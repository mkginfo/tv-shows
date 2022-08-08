export interface loading {
  sections: boolean;
  results: boolean;
  details: boolean;
}

export interface StoreInterface {
  _homeSelection: GenreShow | null;
  _results: Show[];
  _showDetails: ShowDetails | null;
  loading: loading;
}

export interface ShowDetails {
  info: ShowDetailsInfo;
  seasons: Season;
  cast: Cast;
}

export interface ShowDetailsInfo {
  id: number;
  image: string;
  name: string;
  summary: string;
  average: number;
}

export interface SearchShow {
  score: number;
  show: Show;
}

export type GenreShow = {
  [key in Genre]?: Show;
};

export type GenreListShow = {
  [key in Genre]?: Show[];
};

export interface Show {
  id: number;
  url?: string;
  name?: string;
  type?: Type;
  language?: Language;
  genres: Genre[];
  status?: Status;
  runtime?: number;
  averageRuntime?: number;
  premiered?: Date;
  ended?: Date;
  officialSite?: string;
  schedule?: Schedule;
  rating?: Rating;
  weight?: number;
  network?: Network;
  webChannel?: Network;
  dvdCountry?: Country;
  externals?: Externals;
  image?: Image;
  summary?: string;
  updated?: number;
  _links?: Links;
  _embedded?: Embedded;
}

export interface Episodes {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: Date;
  airtime: string;
  airstamp: Date;
  runtime: number;
  rating: Rating;
  image: Image;
  summary: string;
  _links: CharacterLinks;
}

export interface Rating {
  average: number;
}

export interface Embedded {
  cast?: Cast[];
  crew?: Crew[];
  seasons?: Season[];
}

export interface Cast {
  person?: Person;
  character?: Character;
  self?: boolean;
  voice?: boolean;
}

export interface Crew {
  type: string;
  person: Person;
}

export interface Character {
  id?: number;
  url?: string;
  name?: string;
  image?: Image | null;
  _links?: CharacterLinks;
}

export interface CharacterLinks {
  self?: Previousepisode;
}

export interface Previousepisode {
  href?: string;
}

export interface Person {
  id?: number;
  url?: string;
  name?: string;
  country?: Country;
  birthday?: Date | null;
  deathday?: Date | null;
  gender?: Gender | null;
  image?: Image | null;
  updated?: number;
  _links?: CharacterLinks;
}

export interface Country {
  name?: Name;
  code?: Code;
  timezone?: Timezone;
}

export interface Season {
  id?: number;
  url?: string;
  number?: number;
  name?: string;
  episodeOrder?: number | null;
  premiereDate?: Date | null;
  endDate?: Date | null;
  network?: Network;
  webChannel?: null;
  image?: Image | null;
  summary?: string;
  _links?: CharacterLinks;
}

export interface Links {
  self?: Nextepisode;
  previousepisode?: Nextepisode;
  nextepisode?: Nextepisode;
}

export interface Nextepisode {
  href?: string;
}

export interface Country {
  name?: Name;
  code?: Code;
  timezone?: Timezone;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
}

export enum Code {
  CA = "CA",
  De = "DE",
  Fr = "FR",
  GB = "GB",
  Ie = "IE",
  Jp = "JP",
  Us = "US",
}

export enum Name {
  Canada = "Canada",
  France = "France",
  Germany = "Germany",
  Ireland = "Ireland",
  Japan = "Japan",
  UnitedKingdom = "United Kingdom",
  UnitedStates = "United States",
}

export enum Timezone {
  AmericaHalifax = "America/Halifax",
  AmericaNewYork = "America/New_York",
  AsiaTokyo = "Asia/Tokyo",
  EuropeBusingen = "Europe/Busingen",
  EuropeDublin = "Europe/Dublin",
  EuropeLondon = "Europe/London",
  EuropeParis = "Europe/Paris",
}

export interface Externals {
  tvrage?: number;
  thetvdb?: number;
  imdb?: string;
}

export enum Genre {
  Action = "Action",
  Adventure = "Adventure",
  Anime = "Anime",
  Comedy = "Comedy",
  Crime = "Crime",
  Drama = "Drama",
  Espionage = "Espionage",
  Family = "Family",
  Fantasy = "Fantasy",
  History = "History",
  Horror = "Horror",
  Legal = "Legal",
  Medical = "Medical",
  Music = "Music",
  Mystery = "Mystery",
  Romance = "Romance",
  ScienceFiction = "Science-Fiction",
  Sports = "Sports",
  Supernatural = "Supernatural",
  Thriller = "Thriller",
  War = "War",
  Western = "Western",
}

export interface Image {
  medium?: string;
  original?: string;
}

export enum Language {
  English = "English",
  Japanese = "Japanese",
}

export interface Network {
  id?: number;
  name?: string;
  country?: Country;
  officialSite?: string;
}

export interface Rating {
  average: number;
}

/*export interface Schedule {
  time?: Time;
  days?: Day[];
}*/

export interface Schedule {
  time?: string;
  days?: string[];
}

export enum Day {
  Friday = "Friday",
  Monday = "Monday",
  Saturday = "Saturday",
  Sunday = "Sunday",
  Thursday = "Thursday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
}

export enum Time {
  Empty = "",
  The0900 = "09:00",
  The1200 = "12:00",
  The1300 = "13:00",
  The2000 = "20:00",
  The2030 = "20:30",
  The2100 = "21:00",
  The2130 = "21:30",
  The2200 = "22:00",
  The2230 = "22:30",
  The2300 = "23:00",
  The2330 = "23:30",
}

export enum Status {
  Ended = "Ended",
  Running = "Running",
}

export enum Type {
  Animation = "Animation",
  Documentary = "Documentary",
  Reality = "Reality",
  Scripted = "Scripted",
  TalkShow = "Talk Show",
}
