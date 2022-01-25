import DragAndDrop from './Components/DragAndDrop';

import SidebarLeft from './Components/SidebarLeft/SildebarLeft';
import SidebarRight from './Components/SidebarRight/SidebarRight';
import Header from './Components/Header/Header';

import  { ReactFlowProvider } from 'react-flow-renderer';

function App() {
  return (
    <>
      <Header />
      <div className="dndflow">
        <ReactFlowProvider>
          
          <SidebarLeft />
                    
          <DragAndDrop />
                    
          <SidebarRight />
                  
        </ReactFlowProvider>

      </div>
    </>
  );
}

export default App;

//<Minimizar minLabel = {'Node Properties'}/>