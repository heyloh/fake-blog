import { ChangeEvent } from 'react';
import './styles.css';

interface SearchInputProps {
  searchValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ searchValue, handleChange }: SearchInputProps) => {
    return (
        <input 
            type="search"
            value={searchValue}
            onChange={handleChange}
        />
  );
};

export default SearchInput;
