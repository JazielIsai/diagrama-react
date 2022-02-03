import React, { useState, useEffect }from "react";
import DropDownMenus from './DropDownMenus';
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
    buttom: 'buttom',
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

            <input
                type='search'
                placeholder='Search 🔍'
                
            />

            <h3 className= 'description'>
                You can drag and drop the nodes from here
            </h3>

            <DropDownMenus 
                nameDetalist = { 'Files Nodes'  }
                contentList = {
                    nodeType.map( types =>  {
                        return(
                            <li key={ types } > 
                                <DndNode 
                                    key={ types } 
                                    onDragStart={ onDragStart } 
                                    nodeType = { types } 
                                    textNode = { types } 
                                /> 
                            </li>

                        ) 
                    })
                }
            />
            
            <DropDownMenus 
                nameDetalist = { 'Transforms'  }
                contentList = { <li> Por ver </li> }
            />

            <DropDownMenus 
                nameDetalist = { 'Plotting'  }
                contentList = { <li> Por ver </li> }
            />

            <DropDownMenus 
                nameDetalist = { 'Command Line'  }
                contentList = { <li> Por ver </li> }
            />

            <DropDownMenus 
                nameDetalist = { 'My Nodes'  }
                contentList = { <li> Por ver </li> }
            />


        </aside>
    )
} 

export default SidebarLeft;


/*
            <details>
                <summary 
                    className= 'description'
                > 
                    Files Nodes  
                </summary>
                <ol className= 'nodesLibrary'>

                    {
                        nodeType.map( types =>  {
                            return <li key={ types } > <DndNode key={ types } onDragStart={ onDragStart } nodeType = { types } textNode = { types } /> </li>
                        })
                    }
                </ol>

            </details>
            <details>
                <summary className= 'description'>
                    Transforms
                </summary>
                <ol className= 'nodesLibrary'>
                    <li>

                    </li>
                </ol>
            </details>

            <details>
                <summary className= 'description'>
                    Plotting
                </summary>
                <ol className='nodesLibrary'>
                    <li>

                    </li>
                </ol>
            </details>
            <details>
                <summary className= 'description'>
                    Command Line
                </summary>
                <ol className= 'nodesLibrary'>
                    <li>

                    </li>
                </ol>
            </details>
            <details>
                <summary className= 'description'>
                    My Nodes
                </summary>
                <ol className= 'nodesLibrary'>
                    <li>

                    </li>
                </ol>
            </details>




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