import React, { memo } from 'react';

import { Handle, Position } from 'react-flow-renderer';

const ButtonNode = ( { data, isConnectable } ) => {

    return (
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

            <div>
                Button Node { data.label }
            </div>
            
            <input 
                type = "button"
                value = "Boton"
                onChange = {data.value}            
            />

            <Handle 
                type="source"
                position = { Position.Right }
                id="c"
                style = { { top: 10, background: '#555' } }
                isConnectable = { isConnectable }
            />
{/* 
            <Handle 
                type = "source"
                position = { Position.Right }
                id = "b"
                style = { { bottom: 20, background: '#555' } }
                isConnectable = { isConnectable }
            /> */}
        </>
    )
};

export default memo(ButtonNode);
