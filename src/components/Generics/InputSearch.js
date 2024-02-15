import { useState } from 'react';
import styled from 'styled-components';

const MyInputSearch = styled.input`
    font-family: "Nunito Sans", sans-serif;
    width: 15%;
    border: 2px solid #000;
    border-radius: 10px;
    color: black;
    background: #d8e1cf;
    padding: 5px;

    @media(max-width: 768px){
        width: 90%;
    }
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
