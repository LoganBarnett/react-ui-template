import React from 'react';
import { InputControl, FormButton } from '../Forms/FormControls.jsx';

export default function SearchForm({ pokemon, onSubmit, setPokemon }) {
    const formSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObject = Object.fromEntries(formData);
        onSubmit(formDataObject);
    }
    return <form onSubmit={formSubmit}>
        <InputControl
          type="text"
          name="pokemon"
          value={pokemon}
          onChange={e => setPokemon(e.target.value)}
          />
        <FormButton type="submit" > Search </FormButton>
    </form>
}