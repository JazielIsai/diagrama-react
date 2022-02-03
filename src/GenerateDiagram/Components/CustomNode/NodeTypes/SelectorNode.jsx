import React, { memo } from 'react';

import { Handle, Position } from 'react-flow-renderer';

const SelectNode = ( { data, isConnectable } ) => {


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
                Selector Node <strong> { data.valor } </strong>
            </div>
           
            <input 
                className="nodrag"
                list="datalist"
                onChange={data.valor}
                placeholder = "--Select Option--"
            />
            <datalist id = "datalist">
                <option value = "Option 1">Option 1</option>
                <option value = "Option 2">Option 2</option>
                <option value = "Option 3">Option 3</option>
                <option value = "Option 4">Option 4</option>
                <option value = "Option 5">Option 5</option>
                <option value = "Option 6">Option 6</option>
            
            </datalist>


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

export default memo(SelectNode);