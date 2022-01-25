import React, { memo } from 'react';

import { Handle, Position } from 'react-flow-renderer';


function RadioNode( { data, isConnectable } ) {


    return (
        <>
        <Handle
          type = "target"
          position = {Position.Left}
          style = { { background: '#555' } }
          onConnect = { (params) => console.log('handle onConnect', params) }
          isConnectable = { isConnectable }
        />
        <div>
          Custom Range Node: <strong>{data.value}</strong>
        </div>
        <input
          className = "nodrag"
          type = "radio"
        />
        <Handle
          type = "source"
          position = { Position.Right }
          id = "a"
          style = { { top: 10, background: '#555' } }
          isConnectable = { isConnectable }
        />
        <Handle
          type = "source"
          position = { Position.Right }
          id = "b"
          style = { { bottom: 10, background: '#555' } }
          isConnectable = { isConnectable }
        />
      </>
    )
}

export default memo(RadioNode);