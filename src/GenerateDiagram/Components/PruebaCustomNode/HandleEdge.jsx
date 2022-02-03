import React, { useState } from 'react'

import { Handle, Position } from 'react-flow-renderer';

import CustomCheckBox from './CustomInput';

function HandleEdge( { data, isConnectable } ) {

  const [idInputCheckBox, setIdInputCheckBox] = useState('');
  const [labelValue, setLabelValue] = useState('');


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
          
          {
            <CustomCheckBox 
                
            />

          }

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