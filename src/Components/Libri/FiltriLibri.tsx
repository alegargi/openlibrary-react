import { useState } from 'react';
import CustomTextField from '../Utils/CustomTextInput/CustomTextField';
import { Grid, Box } from '@mui/material';

// Dovendo gestire poche righe di codice lascio le interfacce nella classe,
// apposita cartella Interfaces e importerei in questo caso FiltriLibriProps.interface.ts altrimenti
interface FiltriLibriProps {
    onFilterChange: (filtroKey: string, newValue: string) => void;
    listFiltri: { key: string; label: string }[]
}

export default function FiltriLibri(props: FiltriLibriProps) {
    // Dovendo gestire poche righe di codice lascio le costanti nella classe, apposita cartella Constants altrimenti
    //Inizializzo oggetto
    const [filtri, setFiltri] = useState<{ [key: string]: string }>({
        titolo: '',
        autore: '',
        tipologia: ''
    });

    const handleInputChange = (filtroKey: string, newValue: string) => {
        //Gestione modifiche agli input
        setFiltri((prevFiltri) => ({
            ...prevFiltri,          // copia dell'oggetto
            [filtroKey]: newValue, //  aggiorno solo questa proprietà
        }));
        props.onFilterChange(filtroKey, newValue); // Passo il filtro aggiornato al componente padre
    };

    return (
        <Box>
            <Grid container spacing={2}>
                {props.listFiltri.map((filtro, index) => (
                    <Grid item xs={3} md={3} key={index}> {/* aggiungo index per evitare console error */}
                        {/* mostro un input per ogni filto  */}
                        <CustomTextField
                            key={filtro.key}
                            label={filtro.label}
                            value={filtri[filtro.key]}
                            onChange={(newValue) => handleInputChange(filtro.key, newValue)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
