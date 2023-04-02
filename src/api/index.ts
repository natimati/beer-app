import ky from "ky";
import { Beer } from "../models/beer";

const baseUrl = 'https://api.punkapi.com/v2';
const api = ky.extend({
  prefixUrl: baseUrl,
});

export async function getBeers(page: string): Promise<Beer[]> {
  const data = await api.get(`beers?page=${page}&per_page=12`).json<Beer[]>()
  return data;  
};

export async function getBeerById(id: number): Promise<Beer[]> {
  const data = await api.get(`beers/${id}`).json<Beer[]>();
  return data;
};

export async function getRandomBeer(): Promise<Beer[]> {
  const data = await api.get('beers/random').json<Beer[]>();
  return data;
}