import React, { useState } from 'react';

function InputNode ( nameClass, { typeNode } ) {


    return (
        <input 
            className = { nameClass }
            type = { typeNode }
            onChange = { (e) => e.target.value }
            defaultValue = { 5 }


        
        />
    )
}

export default InputNode;