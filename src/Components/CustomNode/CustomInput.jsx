import React, { useState } from 'react';

function InputNode ( { idInputCheckBox, labelValue } ) {

    return (
        <>
            <input 
                className = 'CheckBox'
                type = 'checkbox'
                id = { idInputCheckBox }
                onChange = { (e) => e.target.value }
                value = 'Hi, How are you?'
                />
            <label for= { idInputCheckBox } >
                { labelValue }
            </label>
        </>
    )
}

export default InputNode;