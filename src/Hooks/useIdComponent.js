import { useState } from 'react';
import SidebarRight from '../Components/SidebarRight/SidebarRight';

function useIdComponent (id) {

    const [ idComponentUse, setidComponentUse ] = useState(id);
    
    

    return idComponentUse;
    
}


export default useIdComponent;