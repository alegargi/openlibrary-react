import { Grid, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useState } from "react";
import FiltriLibri from "./FiltriLibri";
import SearchIcon from '@mui/icons-material/Search';
import { findAllFilteredBooksQ, setLoading } from "../../Redux/GestioneLibri/GestioneLibriAction";
import TableLibri from "./TableLibri";

export default function GestioneLibri() {
    const dispatch: AppDispatch = useDispatch();
    // Definisco un array con i filtri richiesti
    const initialFiltriConfig = [
        { key: 'titolo', label: 'Titolo' },
        { key: 'autore', label: 'Autore' },
        { key: 'tipo', label: 'Tipologia' },
    ];

    // Partendo da initialFiltriConfig, inizializzo un obj per gestire il value degli input
    const [filtri, setFiltri] = useState<{ [key: string]: string }>(() => {
        const initialState: { [key: string]: string } = {};
        initialFiltriConfig.forEach(filtro => {
            initialState[filtro.key] = '';
        });
        return initialState;
    });

    const handleFilterChange = (filtroKey: string, newValue: string) => {
        setFiltri((prevFiltri) => ({
            ...prevFiltri,
            [filtroKey]: newValue, //aggiorno il value modificato
        }));
        console.log(`Filtro ${filtroKey} modificato: ${newValue}`);
    };

    const handleSearch = () => {
        //chiamata all'api nell'action
        // dispatch(findAllFilteredBooks(filtri));
        dispatch(setLoading(true));
        dispatch(findAllFilteredBooksQ(filtri));
    }

    return (
        <Grid container >
            <Grid container style={{ marginTop: 20 }} >

                {/* ------------- FILTRI  ------------------*/}
                <FiltriLibri onFilterChange={handleFilterChange} listFiltri={initialFiltriConfig} />

                {/* ------------- BUTTON CERCA  ------------------*/}
                <Grid item xs={3} style={{ alignContent: 'center' }}>
                    <Button variant="contained" endIcon={<SearchIcon />} onClick={() => handleSearch()} >
                        CERCA
                    </Button>
                </Grid>
            </Grid>

            {/* ------------- TABELLA ------------ */}
            <Grid item xs={12}>
                <TableLibri />
            </Grid>
        </Grid >
    );
}
