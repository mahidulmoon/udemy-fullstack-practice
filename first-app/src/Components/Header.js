import React from 'react';

function Header(props){
    return (
        <div>
            <h1>{props.info}</h1>
            <h2>{props.mynumber}</h2>
        </div>
    )
}

export default Header;