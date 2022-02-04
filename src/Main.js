// import { useState } from 'react';
// import  { ReactFlowProvider } from 'react-flow-renderer';
// import { Layout, Model, TabNode, IJsonModel } from 'flexlayout-react';
// import { json } from './Layout/layoutMain';

// import Header from './Header/Header';
// import SidebarLeft from './GenerateDiagram/Components/SidebarLeft/SildebarLeft';
// import DragAndDrop from './GenerateDiagram/Components/DragAndDropMain';
// import SidebarRight from './GenerateDiagram/Components/SidebarRight/SidebarRight';

//import 'flexlayout-react/style/dark.css';

import Navigation from "./Routes/Navigation";

//const model = Model.fromJSON(json);


function App() {
  
  // const [ layoutModel ] = useState(Model.fromJson(json));

  // const factory = (node, TabNode) => {
  //   // console.log(node);

  //   let component = node.getComponent();
    
  //   // if (component === "button") {
  //   //   return <button> { node.getName() } </button>;
  //   // }
  //   // else 
  //   if (component === "SidebarLeft") {
  //     return <SidebarLeft />
  //   }
  //   else if (component === "DragAndDrop") {
  //     return <DragAndDrop />
  //   }
  //   else if (component === "SidebarRight") {
  //     return <SidebarRight />
  //   }

  // }

  return (
    <>
      {/* <Header /> */}
      {/* <ReactFlowProvider>

          <Layout 
          
            model = { layoutModel }
            factory={ factory }
          />

      </ReactFlowProvider> */}
      <Navigation />
    </>
  );
}

export default App;

//<Minimizar minLabel = {'Node Properties'}/>