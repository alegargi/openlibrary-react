// gestioneLibriReducer.ts

interface LibriState {
    data: any[]; // Array dei libri
    loading: boolean;
    error: string | null;
    totalElements: number
  }
  
  const initialState: LibriState = {
    data: [],
    loading: false,
    error: null,
    totalElements: 0
  };
  
  const libriReducer = (state = initialState, action: any): LibriState => {
    switch (action.type) {
      case 'FETCH_BOOKS_SUCCESS':
        return {
          ...state,
          data: action.payload.docs, 
          totalElements: action.payload.num_found, 
          loading: false, //setto a false per spegnere load e mostrare risultati
          error: null,
        };
      case 'FETCH_BOOKS_ERROR':
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      case 'SET_LOADING':
        return {
          ...state,
          loading: action.loading
        }
      default:
        return state;
    }
  };
  
  export default libriReducer;
  