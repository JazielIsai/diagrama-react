import React, { useState, useEffect }from "react";
import DropDownMenus from './DropDownMenus';
import DndNode from './DndNode';

import { useFetch } from '../../../Hooks/useFetch';


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
    
    
    const [nodeType, setNodeType ] = useState( [] );
    const [ dataServices, setDataServices ] = useState( [ ] );
    
    const { data, loading } = useFetch('http://viperdb.scripps.edu/Lab/Workflow/nodes.php?serviceName=get_nodes');
    
    useEffect( () => {

        setDataServices(data);
    }, [data])
    
    useEffect( () => {
        
        for(const nodes in typesNodes ) {
            setNodeType( (els) => {
                return [...els, nodes ]
            } );
            //console.log( nodes );
        }
        
    }, [] );
    
    console.log( dataServices );

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
            
            {
                dataServices !== null && 
                    <DropDownMenus 
                        nameDetalist = { 'Transforms'  }
                        contentList = { 
                            dataServices.map ( (node) =>  (
                                    <li key={node.idnode} >
                                        <DndNode 
                                            key={node.idnode}
                                            onDragStart = { onDragStart }
                                            nodeType = { node.type_node }
                                            textNode = { node.name }
                                        />
                                    </li>
                                ) 
                            ) 
                        }
                    />
            }

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

