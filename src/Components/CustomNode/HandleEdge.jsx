import React, { useState } from 'react'

import { Handle, Position } from 'react-flow-renderer';

function HandleEdge( { data, isConnectable, typeNode } ) {

    const style = { background: '#555' }
    const styleA = { ...style, top: 10 }
    const styleB = { ...style, bottom: 20 }

    return (
        <>
          <Handle
            type = "target"
            position = {Position.Left}
            style = { style }
            onConnect = { (params) => console.log('handle onConnect', params) }
            isConnectable = { isConnectable }
          />
          <div>
            Custom Node: <strong>{data.color}</strong>
          </div>
          
          <input
            className="nodrag"
            type = { typeNode } 
            onChange={data.onChange}
            defaultValue={data.color}
          />

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
      );
} 

export default HandleEdge;