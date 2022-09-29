import React from 'react';

export default function PokemonCard({ pokemon }) {
  return <article>
    <h3>{pokemon.pokemon}</h3>
    <dl>
      <dt>Types</dt>
      <dd>{ pokemon.type_1} {pokemon.type_2}</dd>

      <dt>Abilities</dt>
      <dd>{ pokemon.ability_1} {pokemon.ability_2}</dd>
    </dl>
  </article>
}
