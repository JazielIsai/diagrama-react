import { useState } from 'react';
import  { ReactFlowProvider } from 'react-flow-renderer';
import { Layout, Model, TabNode, IJsonModel } from 'flexlayout-react';
import { json } from '../Layout/layoutMain';

import SidebarLeft from './Components/SidebarLeft/SildebarLeft';
import DragAndDrop from './Components/DragAndDropMain';
import SidebarRight from './Components/SidebarRight/SidebarRight';

import { IdContext } from '../Hooks/IdNodeContext';

//import 'flexlayout-react/style/dark.css';


//const model = Model.fromJSON(json);


function ViewGenerateDiagramMain() {

  const [ layoutModel ] = useState(Model.fromJson(json));

  const [ idNode, setIdNode ] = useState( '' );

  const factory = (node, TabNode) => {
    // console.log(node);

    let component = node.getComponent();
    
    if (component === "SidebarLeft") {
      return <SidebarLeft />
    }
    else if (component === "DragAndDrop") {
      return <DragAndDrop />
    }
    else if (component === "SidebarRight") {
      return <SidebarRight  />
    }

  }

  return (
    <>
      <ReactFlowProvider>
         
          <IdContext.Provider value={ { idNode: idNode, setIdNode: setIdNode } }>
          
            <Layout
            
              model = { layoutModel }
              factory={ factory }
            />

          </IdContext.Provider>

      </ReactFlowProvider>
     
    </>
  );
}

export default ViewGenerateDiagramMain;