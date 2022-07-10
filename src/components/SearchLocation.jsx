import React from 'react';
import { useState } from 'react';
const SearchLocation = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div>
            <input type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
            <button >Search</button>

        </div>
    );
};

export default SearchLocation