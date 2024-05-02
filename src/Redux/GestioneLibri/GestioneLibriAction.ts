import axios from 'axios';
import { AppThunk } from '../../store';

//Provando a passare tre request param distinti la ricerca non produce risultati
export const findAllFilteredBooks = (filters: { [key: string]: string }): AppThunk => {
  return async (dispatch) => {
    try {
      const queryString = Object.keys(filters)
        .filter((key) => filters[key] !== '') // Solo i filtri non vuoti
        .map((key) => `${key}=${encodeURIComponent(filters[key])}`)
        .join('&');

      const url = `https://openlibrary.org/search.json?${queryString}`;
      const response = await axios.get(url);

      // Dispatch dell'azione per aggiornare lo stato con i risultati della chiamata
      // in questo caso non creo un file type contenente le costanti 
      dispatch({ type: 'FETCH_BOOKS_SUCCESS', payload: response.data });
    } catch (error: any) {
      dispatch({ type: 'FETCH_BOOKS_ERROR', error: error.message });
    }
  };
};

export const findAllFilteredBooksQ = (filters: { [key: string]: string }): AppThunk => {
  return async (dispatch) => {
    try {
      const values = Object.values(filters)
        .filter((value) => value !== '') // Filtra i valori non vuoti
        .map((value) => encodeURIComponent(value))
        .join('+');

      const queryString = `q=${values}`;
      const url = `https://openlibrary.org/search.json?${queryString}`;
      const response = await axios.get(url);

      dispatch({ type: 'FETCH_BOOKS_SUCCESS', payload: response.data });
    } catch (error: any) {
      dispatch({ type: 'FETCH_BOOKS_ERROR', error: error.message });
    }
  };
};

export const setLoading = (loading = true): AppThunk => {
  return async (dispatch) => {
  dispatch({ 
    type: 'SET_LOADING',
    loading: loading });
  };
};