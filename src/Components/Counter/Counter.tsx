import { Button } from "@mui/material";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
      //Il counter viene aggiornato tramite l'hook useState
      setCount((count) => count + 1)
    }
    
    return (
        <Button variant="contained" style={{alignContent: 'center', margin: 20}} onClick={() => handleCount()}>
        count is {count}
        </Button>
    );
}