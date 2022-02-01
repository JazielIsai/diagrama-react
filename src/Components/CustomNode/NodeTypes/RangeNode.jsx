
import React, { memo } from 'react';

import { Handle, Position } from 'react-flow-renderer';

const RangeNode = ({ data, isConnectable }) => {
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
        Custom Range Node: <strong> { data.label } </strong>
      </div>
      <input
        className = "nodrag"
        type = "range"
        onChange = { data.value }
        defaultValue = { 5 }
      />
      
      <Handle 
          type="source"
          position = { Position.Right }
          id="c"
          style = { { top: 10, background: '#555' } }
          isConnectable = { isConnectable }
      />

    </>
  );
};

export default memo(RangeNode);