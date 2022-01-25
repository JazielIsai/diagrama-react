import React, { memo } from 'react';

import { Handle, Position } from 'react-flow-renderer';

const style = ( { background: '#555' } );
const styleA = ( { ...style, top: 10 } );
const styleB = ( { ...style, bottom: 20 } );

const CheckboxNode = ( { data, isConnectable } ) => {


    return(
        <>
            <Handle 
                type = "target"
                position = { Position.Left }
                style = { { style } }
                onConnect = { (params) => console.log(params) }
                isConnectable = { isConnectable }
            />
            
            <div
                
            >
                Checkbox Node <strong>{ data.value } </strong>
            </div>

            <div >
                <input 
                    type="checkbox"
                    id = "item"
                    name="Hola"
                />
                <label htmlFor="item"> Hello World </label>
            </div>

            <Handle 
                type = "source"
                position = { Position.Right }
                id = "a"
                style = { styleA }
                isConnectable = { isConnectable }
            />

            <Handle  
                type = "source"
                position = { Position.Right }
                id = "b"
                style = { styleB }
                isConnectable = { isConnectable }
            />
        
        </>
    )
};

export default memo(CheckboxNode);