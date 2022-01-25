import React from 'react';


function Minimizar( {minLabel} ) {



    return(
        <>
            <input 
                type="checkbox"
                id="check"
                className = {`checkbox-${minLabel}`}
            />
            <label htmlFor='check' className="minimizar"> {minLabel} </label>    
            

        </>
    )
}

export default Minimizar;