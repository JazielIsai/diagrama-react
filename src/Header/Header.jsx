import React from 'react';
import Minimizar from './Minimizar';
import File from './File';

function Header (){

    return(
        <header className="header">
            <div className="header-menu">
                <h2> 🔙 Go Back</h2>
                <h1> Wflow name</h1>
                <h2> Import / Export </h2>
            </div>
            <div className="header-controls">
                <Minimizar 
                    minLabel = {'Node Library'}
                />
                <File 

                />
                <Minimizar 
                    minLabel = {'Node Properties'}
                />

            </div>
        </header>
    )
}

export default Header;