/**
 * Interface with the Pokedex API.
 *
 * Documentation is hosted here: https://pokedex-alchemy.herokuapp.com
 */

import { fetchOrReject } from './utils.js';

export const typesGetAll = async () => {
  const res = await fetchOrReject(process.env.POKEDEX_URL + '/types');
  return res.json();
}

export const pokemonGetAll = async (page, formData) => {
  const query = Array.from(formData.entries())
    .map(([k, v]) => `${k}=${v}`).join('&')
    + '&page=' + page;
  const res = await fetchOrReject(`${process.env.POKEDEX_URL}?${query}`);
  return res.json();
}
