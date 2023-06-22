import { useState } from 'react';

// import { Search } from 'lucide-react';
import { Container } from './styles';

interface SearchBarProps {
  search: string;
  setSearch: (search: string) => void;
}

export function SearchBar({search, setSearch} : SearchBarProps) {
  return (
    <Container>
      <div className='search-container'>
        <input
          className='search-input'
          type='text'
          placeholder='Search for a past recomendation...'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(search);
          }}
        />
      </div>
    </Container>
  );
}
