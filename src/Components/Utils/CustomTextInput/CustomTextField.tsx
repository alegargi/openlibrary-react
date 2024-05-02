import { ChangeEvent } from 'react';
import { InputLabel, TextField, Box } from '@mui/material';

interface CustomTextFieldProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

export default function CustomTextField(props: CustomTextFieldProps) {

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Richiama la funzione onChange del component padre
    props.onChange(e.target.value);
    props.onChange(e.target.value);
  };

  return (
    <Box>
        <InputLabel shrink>{props.label}</InputLabel>
        <TextField onChange={handleInputChange} value={props.value} />
    </Box>
  );
};
