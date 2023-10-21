// const Search = () => {
//     return (
//         <header>
//             <h2 className="header__title">Find Your Happy Place</h2>
//             <input
//                 type="text"
//                 className="header__search"
//                 placeholder="Enter an address, neighborhood, city, or ZIP code"
//             />
//         </header>
//     );
// }

// export default Search;

import React from 'react';

const Search = () => {
    return (
        <header >
            <h2 className="header__title">Find Your Happy Place</h2>
            <input
                type="text"
                className="header__search"
                style={inputStyle}
                placeholder="Enter an address, neighborhood, city, or ZIP code"
            />
        </header>
    );
}

const inputStyle = {
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    width: '300px',
    margin: '10px',
}

export default Search;
