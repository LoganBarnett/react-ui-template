import React from 'react';
import useSearch from '../../hooks/use-search.js'
import { FormButton, SelectControl } from '../Forms/FormControls.jsx'

export default function SearchForm({ onSubmit, type }) {
  const { types } = useSearch();
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    onSubmit(formData);
    const params = new URLSearchParams(location.search);
    Array.from(formData.entries()).forEach(([k, v]) => {
      params.set(k, v);
    });
    window.history.replaceState(
      {},
      '',
      `${location.pathname}?${params.toString()}`,
    );

  }
  return <form onSubmit={submitHandler}>
    <SelectControl label="Select Type" name="type" value={type}>
      {types.map(type => {
        return <option key={type} value={type}>{type}</option>
      })}
    </SelectControl>
    <FormButton type="submit">Search</FormButton>
  </form>
}
