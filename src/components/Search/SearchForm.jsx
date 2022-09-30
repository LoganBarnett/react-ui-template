import React from 'react';
import { InputControl, FormButton } from '../Forms/FormControls.jsx';
import useSearchForm from '../../hooks/use-search-form.js';

export default function SearchForm({ onSubmit }) {
    const { pokemon, setPokemon, searchForm, setSearchForm } = useSearchForm();
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