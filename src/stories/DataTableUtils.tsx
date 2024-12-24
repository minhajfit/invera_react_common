import { Data } from "./DataTable";

export function createData(
  id: number,
  movieName: string,
  director: string,
  year: number,
  rating: number,
): Data {
  return { id, movieName, director, year, rating };
}
