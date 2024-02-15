import { useState } from 'react';
import styled from 'styled-components';

const MyInputSearch = styled.input`
    width: 15%;
    border: 1px solid #000;
    border-radius: 10px;
    color: black;
    background: blanchedalmond;
    padding: 5px;
`

const Search = ({ fruits, setFilteredFruits }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
        const newFruits = fruits.filter(fruit => fruit.name
            .toLowerCase()
            .includes(term.toLowerCase())
        );
        setFilteredFruits(newFruits);
    };

    return (
        <>
            <MyInputSearch
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search"
            />
        </>
    );
};

export default Search;
