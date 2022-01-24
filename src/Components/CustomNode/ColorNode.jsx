import React, { useState } from 'react'

import { Handle, Position } from 'react-flow-renderer';

function ColorNode( { data, isConnectable } ) {
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
            Custom Node: <strong>{data.color}</strong>
          </div>
          
          <input
            className="nodrag"
            type="color"
            onChange={data.onChange}
            defaultValue={data.color}
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
            style = { { bottom: 20, background: '#555' } }
            isConnectable = { isConnectable }
          />
        </>
      );
} 

export default ColorNode;