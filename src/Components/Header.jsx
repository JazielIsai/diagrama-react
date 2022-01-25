import React from 'react';
import Minimizar from './Minimizar';
import File from './File';

function Header (){

    return(
        <Header className="header">
            <div>
                <h2> 🔙 Go Back</h2>
                <h1> Wflow name</h1>
                <h2> Import / Export </h2>
            </div>
            <div>
                <Minimizar 
                    minLabel = {'Node Library'}
                />
                <File 

                />
                <Minimizar 
                    minLabel = {'Node Properties'}
                />

            </div>
        </Header>
    )
}

export default Header;