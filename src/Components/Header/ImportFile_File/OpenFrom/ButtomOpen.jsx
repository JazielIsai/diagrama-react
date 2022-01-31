import { useState } from 'react';


function ButtomOpen () {
    const [ nameButtom, setNameButtom ] = useState();

    
    return (
        <button 
            onClick=''
            className="btn btn-primary mb-2"
        >    
            { setNameButtom }
        </button>
    )
}

export default ButtomOpen;