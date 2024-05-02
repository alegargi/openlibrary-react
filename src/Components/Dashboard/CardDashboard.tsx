
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardDashboard() {
    return (
        <Card sx={{ minWidth: 275 }} style={{ margin: 20 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Verifica Competenze
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    Sviluppare un progetto React che abbia come funzionalità:
                    un menù con l'elenco dei vari task da implementare, la gestione delle rotte del menu deve essere gestita dalla libreria react-router-dom
                    il primo punto è sviluppare un contatore che con la pressione di un bottone incrementa il contatore di un'unità utilizzando gli hooks di react per l'aggiornamento del componente
                    il secondo punto prevede l'accesso alle openApi di openlibrary.org per scaricare un elenco di libri sulla base di una o più parole che l'utente deve inserire in un tag input. L'elenco ottenuto deve essere mostrato a video e devono essere mostrati i dati relativi ad autore, nel caso ce ne sia più di uno devono essere visibili i primi due, titolo ed editore.
                    Inoltre vanno implementati dei filtri per aiutare la ricerca.
                    Nello specifico i filtri da implementare sono: Autore, lingua e tipologia di documento.
                    I valori del filtro devono essere riferiti alla ricerca appena effettuata.
                    La gestione dello stato va sviluppata tramite la libreria redux toolkit. l'url è il seguente: "https://openlibrary.org/search.json?q=the+lord+of+the+rings"
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                    Il progetto sviluppato va caricato su di un repository github o gitlab pubblico ed inviato tramite mail.
                    Qualsiasi commento è sempre ben gradito
                </Typography>
            </CardContent>
        </Card>
    );
}
