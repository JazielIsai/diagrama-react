import React, { memo } from 'react';

import { Handle, Position } from 'react-flow-renderer';

const TextNode = ( { data, isConnectable } ) => {

    return (

        <>
            <Handle 
                type = 'target'
                position = { Position.Left }
                style = { { background: '#555' } }
                onConnect = { (params) => console.log(params) }
                isConnectable = { isConnectable }
            
            />

            <div>
                Text Node { data.value }
            </div>

            <input 
                type = "text"
                placeholder = "Write here"
                onChange = { data.value }
            />
            
            <Handle 
                type = 'source'
                position = { Position.Right }
                id = 'a'
                style = { { to: 10, background: '#aaa' } }
                isConnectable = { isConnectable }

            />

            <Handle 
                type = "source"
                position = { Position.Right }
                id = "b"
                style = { { bottom: 20, background: '#555' } }
                isConnectable = { isConnectable }
            />

        </>

    );


};

export default memo (TextNode);