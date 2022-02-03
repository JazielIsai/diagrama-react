import React, { memo } from 'react';

import { Handle, Position } from 'react-flow-renderer';

const style = ( { background: '#555' } );
const styleA = ( { ...style, top: 10 } );
const styleB = ( { ...style, bottom: 20 } );

const CheckboxNode = ( { data, isConnectable } ) => {


    return(
        <>
            <Handle 
                type="target"
                position = { Position.Left }
                id="a"
                style = { { top: 10, background: '#555' } }
                onConnect = { (params) => console.log(params)}
                isConnectable = { isConnectable }
            />

            <Handle 
                type="target"
                position = { Position.Left }
                id="b"
                style = { { bottom: 30, background: '#555' } }
                onConnect = { (params) => console.log(params)}
                isConnectable = { isConnectable }
            />
            
            <div
                
            >
                Checkbox Node <strong>{ data.label } </strong>
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
                type="source"
                position = { Position.Right }
                id="c"
                style = { { top: 10, background: '#555' } }
                isConnectable = { isConnectable }
            />
        
        </>
    )
};

export default memo(CheckboxNode);