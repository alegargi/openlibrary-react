import { useSelector } from "react-redux";
import { Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, CircularProgress, Typography } from "@mui/material";
import { RootState } from "../../store";

interface HeaderField {
    id: string;
    label: string;
}
export default function TableLibri() {
    const loading = useSelector((state: RootState) => state.libri.loading);
    const data = useSelector((state: RootState) => state.libri.data);
    const totalElements = useSelector((state: RootState) => state.libri.totalElements);

    const headerFieldsGestioneLibri: HeaderField[] = [
        { id: 'titolo', label: 'Titolo' },
        { id: 'autore', label: 'Autore' }
    ];

    console.log("Elementi trovati: ", totalElements);

    return (
        <Box component={'div'} >
            <Paper style={{ overflowX: 'auto', maxWidth: '850px', marginTop: 20 }}>
                <Box component={'div'}>
                    <Table size={'small'} style={{ minWidth: 500 }}>

                        {/* ----------INTESTAZIONE TABELLA -------- */}
                        <TableHead style={{ backgroundColor: '#f0f0f0' }}>
                            <TableRow>
                                {headerFieldsGestioneLibri.map(field => {
                                    return (
                                        <TableCell align="center" key={field.label}>
                                            {field.label}
                                        </TableCell>
                                    )
                                })
                                }
                            </TableRow>
                        </TableHead>

                        {/* ----------BODY TABELLA -------- */}
                        <TableBody>
                            {data.length === 0 && !loading &&
                                <TableRow >
                                    <TableCell style={{ textAlign: 'center' }} colSpan={headerFieldsGestioneLibri.length}>
                                        Nessun record presente
                                    </TableCell>
                                </TableRow>
                            }
                            {/* Per comodità, non essendo la tabella paginata, faccio uno slice direttamente sull'array mostrato */}
                            {!loading && data.slice(0, 10).map(row => (
                                <TableRow key={'row-' + row.id} hover>
                                    <TableCell align="center">{!!row.title ? row.title : ""}</TableCell>
                                    <TableCell align="center">{!!row.author_name && row.author_name.length > 0 ? row.author_name.slice(0, 2).join(', ') : ""}</TableCell>  {/* mostro solo i primi due separati da una virgola */}
                                </TableRow>
                            ))}
                            {/* ---------- LOADER -------- */}
                            {loading &&
                                <TableRow hover>
                                    <TableCell style={{ textAlign: 'center' }} colSpan={headerFieldsGestioneLibri.length}>
                                        <CircularProgress />
                                    </TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                    <Typography variant="body1" style={{ backgroundColor: '#f0f0f0', textAlign: 'right', fontSize: '10pt', padding: 5 }}>
                    Elementi mostrati: {data.length < 10 ? data.length : 10 } | Numero totale di elementi: {totalElements}
                    </Typography>
                </Box>

            </Paper>
        </Box>
    )
}
