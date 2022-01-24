import React, { useState, useEffect }from "react";
import Minimizar from './Minimizar';
import DndNode from './DndNode';


const typesNodes = { 
    input: 'input', 
    default: 'default', 
    output: 'output', 
    color: 'color', 
    select: 'select',
    range: 'range', 
    text: 'text', 
    textarea: 'textarea', 
    button: 'button',
    radio: 'radio',
    file: 'file',

}

function SidebarLeft() {

    const [textNode, setTextNode ] = useState('node');
    const [nodeType, setNodeType ] = useState( [] );

    useEffect( () => {
        
        for(const nodes in typesNodes ) {
            setNodeType( (els) => {
                return [...els, nodes ]
            } );
            //console.log( nodes );
        }

    }, [] );




    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };
    

    return(
        <aside className= 'asideLeft'>
            <Minimizar />
            <p className= 'description'> You can drag and drop the nodes from here </p>
            {
                nodeType.map( types =>  {
                    return <DndNode key={ types } onDragStart={ onDragStart } nodeType = { types } textNode = { types } />
                })
            }

        </aside>
    )
} 

export default SidebarLeft;


/*
    <DndNode 
        onDragStart={ onDragStart } 
        nodeType = { typesNodes.input }
        textNode = { typesNodes.input }
    />
    <DndNode 
        onDragStart={ onDragStart } 
        nodeType = { typesNodes.default }
        textNode = { typesNodes.default }
    />
    <DndNode 
        onDragStart={ onDragStart } 
        nodeType = { typesNodes.output }
        textNode = { typesNodes.output }
    />
    <DndNode 
        onDragStart={ onDragStart } 
        nodeType = { typesNodes.color }
        textNode = { typesNodes.color }
    />
    <DndNode 
        onDragStart={ onDragStart } 
        nodeType = { typesNodes.select }
        textNode = { typesNodes.select }
    />
    <DndNode 
        onDragStart={ onDragStart } 
        nodeType = { typesNodes.range }
        textNode = { typesNodes.range }
    />
*/