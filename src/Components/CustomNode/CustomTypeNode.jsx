import React from 'react';

import HandleEdge from './HandleEdge';
import CustomInput from './CustomInput';


function TypeNode ( { data, isConnectable } ) {

    return {
        color: <HandleEdge data = { data } isConnectable = { isConnectable } typeNode = { 'color' }/> ,
        range: <HandleEdge data = { data } isConnectable = { isConnectable } typeNode = { 'range' }/> 
    }

}

export default TypeNode;