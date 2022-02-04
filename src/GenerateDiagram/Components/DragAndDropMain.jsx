import React, { useState, useRef, useContext } from 'react';

import ReactFlow, { 
    Controls
} from 'react-flow-renderer';

import TypesNode from './CustomNode/TypesNode';
import MiniMapReactFlow from './MiniMapFlow/MiniMap';

import SidebarRight from './SidebarRight/SidebarRight';


// import { OnElementsRemove, OnConnect, onDragOver } from './DragDropMain/index'; 
import { OnConnect } from './DragDropMain/conectionEdge';
import { OnElementsRemove } from './DragDropMain/onElementsRemove';
// import { onElementClick } from './DragDropMain/onElementClick';
//import { onLoad } from './DragDropMain/onLoad';
import { onDragOver } from './DragDropMain/onDragOver';
import { onNodeDragStop } from './DragDropMain/onNodeDragStop';
// import { onLoad, onDrop } from './DragDropMain/OnDrop';

import { IdContext } from '../../Hooks/IdNodeContext';

const initColor = '#aaa';


const connectionLineStyle = { stroke: '#fff'}


let id = 1;
const getId = () => `dndnode${id++}`;


function ZoneDragAndDrop () { 
    //useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
    const ReactFlowWrapper = useRef(null);

    //useState is a Hook that lets you add React state to function components
    const [ reactFlowInstance, setReactFlowInstance ] = useState(null);

    const [ nodes, setNodes ] = useState( [ ] );

    const [bgColor, setBgColor] = useState(initColor);
    
    // const [ idComponente, setIdComponente ] = useState('');

    const { idNode, setIdNode } = useContext(IdContext);

    const onElementClick = (event, element ) => {
        const id = element.id;
        // setIdComponente(id);
        setIdNode(id);
        console.log()
        // --> element.type = 'default'; // --> change the value of the component
        console.log('Evento Click', element, id, ' --- id --- ');
    }

    
    //onLoad(reactFlowInstance): called after flow is initialized
    const onLoad = (_reactFlowInstance) => { 
        setReactFlowInstance(_reactFlowInstance)  
    }

       //ondrop: It specifies where the drop has occurred at the end of the drag operation.
    const onDrop = (event) => {
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
                    color: bgColor
                }
            };

            setNodes( (els) => els.concat(newNode) );           

        }
    };


    return(
        <>
            <div className="reactflow-wraper" ref = { ReactFlowWrapper }>

                <ReactFlow
                    elements = { nodes }
                    onElementClick = { onElementClick }
                    onElementsRemove = { OnElementsRemove(setNodes) }
                    onConnect = { OnConnect(setNodes) }
                    onNodeDragStop = { onNodeDragStop }

                    onLoad = { onLoad }
                    onDrop = { onDrop }
                    onDragOver = { onDragOver }

                    style = { { background: bgColor } }
                    nodeTypes = {  TypesNode() }
                    connectionLineStyle = { connectionLineStyle }
                    snapToGrid = { true }
                >
                        
                    <MiniMapReactFlow nodes={nodes} />
                    <Controls />
                </ReactFlow>

            </div>
            


        </>

    )



}

export default ZoneDragAndDrop;