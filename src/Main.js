import  { ReactFlowProvider } from 'react-flow-renderer';

import Header from './Components/Header/Header';
import SidebarLeft from './Components/SidebarLeft/SildebarLeft';
import DragAndDrop from './Components/DragAndDrop';
//import SidebarRight from './Components/SidebarRight/SidebarRight';


function App() {
  return (
    <>
      <Header />
      <div className="dndflow">
        <ReactFlowProvider>
          
          <SidebarLeft />
                    
          <DragAndDrop />
                    
          {/* <SidebarRight /> */}
                  
        </ReactFlowProvider>

      </div>
    </>
  );
}

export default App;

//<Minimizar minLabel = {'Node Properties'}/>