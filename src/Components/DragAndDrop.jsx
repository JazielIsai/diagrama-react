import React, { useState, useEffect, useRef, useCallback } from 'react';

import ReactFlow, { 
    ReactFlowProvider,
    addEdge,
    MiniMap,
    isEdge,
    removeElements,
    Controls
} from 'react-flow-renderer';

import SidebarLeft from './SildebarLeft';
import SidebarRight from './SidebarRight';
import Minimizar from './Minimizar';
import Header from './Header';


import ColorNode from './CustomNode/ColorNode';
import RangeNode from './CustomNode/RangeNode';
import TextNode from './CustomNode/TextNode';
import CheckBoxNode from './CustomNode/CheckboxNode';
import SelectNode from './CustomNode/SelectorNode';
//import ButtomNode from './CustomNode/'

import TypeNode  from './CustomNode/CustomTypeNode';

//import { onChange } from '../Helpers/NodeModific';

const initColor = '#aaa';

const onNodeDragStop = (event, node) => { console.log('drag stop',node); };


const connectionLineStyle = { stroke: '#fff'}


const nodeTypes = {
    color: ColorNode,
    range: RangeNode,
    text: TextNode,
    checkbox: CheckBoxNode,
    select: SelectNode

} //TypeNode;


let id = 1;
const getId = () => `dndnode${id++}`;

const ZoneDragAndDrop = () => { 
    //useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
    const ReactFlowWrapper = useRef(null);

      //useState is a Hook that lets you add React state to function components
    const [ reactFlowInstance, setReactFlowInstance ] = useState(null);

    const [ elements, setElements ] = useState([]);

    const [bgColor, setBgColor] = useState(initColor);

    const [ idComponente, setIdComponente ] = useState('');
    


    const onChange = (event) => {
        setElements((els) =>
          els.map((e) => {
            if (isEdge(e) || e.id !== '1') {
              return e;
            }
  
            const color = event.target.value;
            console.log(color);
            setBgColor(color);
  
            return {
              ...e,
              data: {
                ...e.data,
                color,
              },
            };
          })
        );
    };
    
    useEffect(() => {
        onChange();
        
        //setElements ( (els) => console.log(els) );

        setElements ( [
            {
              id: '1',
              type: 'color',
              data: { onChange: onChange, color: bgColor },
              style: { border: '1px solid #777', padding: 10 },
              position: { x: 100, y: 50 },
            },
        ]);

    }, []);



    const onElementClick = (event, element ) => {
        const id = element.id;
        setIdComponente(id);
        // --> element.type = 'default'; // --> change the value of the component
        console.log('Evento Click', element, id, ' --- id --- ', idComponente);
    }

    //The React useCallback Hook returns a memoized callback function.
    //onElementsRemove(elements): called when user removes node or edge.
    //useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. 
    //This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
    const onElementsRemove = useCallback(
        (elementsToRemove)=> {
            setElements( (els) => removeElements(elementsToRemove, els))
        },
        []
    );
    
    //onConnect({ source, target }): called when user connects two nodes
    const onConnect = useCallback (
        (params) =>
          setElements((els) =>
            addEdge( { ...params, animated: false, style: connectionLineStyle }, els)
          ),
        []
    );
    //onLoad(reactFlowInstance): called after flow is initialized
    const onLoad = (_reactFlowInstance) => { 
        setReactFlowInstance(_reactFlowInstance)  
    }

    //ondragover: It specifies where the dragged data can be dropped.
    const onDragOver = (event) => {
        //Call event.preventDefault() method to allow the dropping of elements in other elements by preventing the default handling of the element.
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }

    //ondrop: It specifies where the drop has occurred at the end of the drag operation.
    const onDrop = (event) => {
        //Call event.preventDefault() method to allow the dropping of elements in other elements by preventing the default handling of the element.
        event.preventDefault();

        if(reactFlowInstance) {
            const type = event.dataTransfer.getData('application/reactflow');
            console.log(event);
            console.log(event.dataTransfer.getData('application/reactflow'));

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
                    onChange: onChange,
                    color: bgColor
                }
            };

            setElements( (els) => els.concat(newNode) );           

        }
    };

    return(
        <div className="dndflow">
            <ReactFlowProvider>
                <SidebarLeft />
                <div className="reactflow-wraper" ref = { ReactFlowWrapper }>
                    <ReactFlow 
                        elements={ elements }
                        onElementClick={ onElementClick }
                        onElementsRemove = { onElementsRemove }
                        onConnect = { onConnect }
                        onNodeDragStop = { onNodeDragStop }

                        onLoad = { onLoad }
                        onDrop = { onDrop }
                        onDragOver = { onDragOver }

                        style = { { background: bgColor } }
                        nodeTypes = { nodeTypes }
                        connectionLineStyle = { connectionLineStyle }
                        snapToGrid = { true }
                    >

                        <MiniMap
                            nodeStrokeColor={(n) => {
                            if (n.type === 'input') return '#0041d0';
                            if (n.type === 'output') return '#ff0072';
                            }}
                            nodeColor={(n) => {
                            if (n.type === 'selectorNode') return '#555';
                            return '#fff';
                            }}
                        />
                        <Controls />
                    </ReactFlow>

                </div>
                <div className="sidebarRightAgrupado">
                    <Minimizar minLabel = {'Node Properties'}/>
                   <SidebarRight setElements ={ setElements } idComponente = { idComponente } />        
                </div>
            </ReactFlowProvider>

        </div>

    )



}

export default ZoneDragAndDrop;