
import { useState } from "react";
import FromLibrary from "./OpenFrom/FromLibrary";
import FromFile from './OpenFrom/FromFile';


function ImportFile() {

    const [selectOpenFrom, setSelectOpenFrom ] = useState('fromlibrary');

    const handleOnClick = (e) => {
        const value = e.target.id;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        console.log(value);
        // setSelectOpenFrom(value);
    }


    return (
        <div className="ImportFile">
            <h2> Open From... </h2>
            <div className="ImportFile-OpenFrom">
                <nav> 
                    <buttom id="fromlibrary" onClick={ handleOnClick } > From Library </buttom>
                    <buttom id='fromfile' onClick={ handleOnClick } > From File </buttom>
                </nav>

                {
                    selectOpenFrom === 'fromlibrary' ? <FromLibrary /> : <FromFile />
                }

            </div>
        </div>
    )
}

export default ImportFile;