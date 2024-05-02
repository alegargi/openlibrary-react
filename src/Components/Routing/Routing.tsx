import {
    Routes,
    Route
} from 'react-router-dom';
import Counter from '../Counter/Counter';
import GestioneLibri from '../Libri/GestioneLibri';
import Dashboard from '../Dashboard/CustomDashboard';


function Routing() {
    console.log("routing", location.pathname)
    return (
        <Routes>
        {/* BASE */}
         <Route path="/" element={<Dashboard />} />
        {/* COUNTER */}
        <Route path="/counter" element={<Counter />} />
        {/* COUNTER */}
        <Route path="/libri" element={<GestioneLibri />} />
    </Routes>
    );
}

export default Routing
