import React from 'react';


function Minimizar( {minLabel} ) {



    return(
        <>
            <input 
                type="checkbox"
                id={`check-${ minLabel.replace(' ','') }`}
                className = {`checkbox-${ minLabel.replace(' ','') }`}
            />
            <label 
                htmlFor={`check-${ minLabel.replace(' ','') }`} 
                className="minimizar"
            > 
                {minLabel} 
            </label>    
            

        </>
    )
}

export default Minimizar;