import { Chip, Stack, TextField } from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react';

interface MultipleStringInputProps {
  strings: string[];
  setStringArray: Dispatch<SetStateAction<string[]>>;
  inputName: string

}

export const MultipleStringInput: React.FC<MultipleStringInputProps> = ({ strings, setStringArray, inputName }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const trimmedValue = inputValue.trim();
      if (trimmedValue !== '') {
        setStringArray([...strings, trimmedValue]);
        setInputValue('');
      }
    }
  };

  const handleRemoveString = (removedIndex: number) => {
    strings.splice(removedIndex, 1);
    setStringArray([...strings]);
  };

  return (
    <Stack
      width={"100%"}
      gap={1}
    >
      <Stack
        direction={"row"}
        spacing={0.5}
        gap={0.5}
        flexWrap={"wrap"}
      >
        {
          strings.map((string, index) => (
            <Chip
              key={index}
              label={string}
              onDelete={() => handleRemoveString(index)}
            />
          ))
        }
      </Stack>
      <TextField
        label={`Type and press enter to Add ${inputName}`}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyPress}
      />
    </Stack>
  );
};
