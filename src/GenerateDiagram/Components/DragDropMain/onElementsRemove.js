import { useCallback } from 'react';
import { removeElements } from 'react-flow-renderer';

//The React useCallback Hook returns a memoized callback function.
//onElementsRemove(elements): called when user removes node or edge.
//useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. 
//This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
   
export const OnElementsRemove = ( setNodes ) => useCallback(
    ( elementsToRemove ) => {
        setNodes( (els) => removeElements( elementsToRemove, els ) )
    },
    []
);