import { useState } from 'react';

let id = 1;
const getId = () => `dndnode${id++}`;

function OnDropOnLoad () {

    const [ reactFlowInstance, setReactFlowInstance ] = useState(null);

    //onLoad(reactFlowInstance): called after flow is initialized
    const onLoad = (_reactFlowInstance) => { 
        setReactFlowInstance(_reactFlowInstance)  
    }
    
    
    //ondrop: It specifies where the drop has occurred at the end of the drag operation.
    const onDrop = (setNodes, event) => {
        //Call event.preventDefault() method to allow the dropping of elements in other elements by preventing the default handling of the element.
        event.preventDefault();
    
        if(reactFlowInstance) {
            const type = event.dataTransfer.getData('application/reactflow');
            // console.log(event);
            // console.log(event.dataTransfer.getData('application/reactflow'));
    
            const position = reactFlowInstance.project( {
                x: event.clientX,
                y: event.clientY - 40
            } );
            
            console.log('reactFlowInstance  ', reactFlowInstance );
    
            const newNode = {
                id: getId(),
                type: type,
                position: position,
                style: { border: '1px solid black', padding: 10 },
                data: { 
                    label: `${type}`, 
                    //onChange: onChange,//HandleOnChange(setNodes, setBgColor, isEdge, event),
                    //color: bgColor
                }
            };
    
            setNodes( (els) => els.concat(newNode) );           
    
        }
    };

    return {
        onLoad,
        onDrop
    }
    
}

export default OnDropOnLoad;