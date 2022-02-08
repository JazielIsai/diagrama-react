import { useState } from 'react';


function ButtomOpen ( { setNameButtom } ) {
    // const [ nameButtom, setNameButtom ] = useState();

    
    return (
        <button 
            onClick=''
            className="btn btn-primary mb-2 accordion-body text-center w-50 "
        >    
            { setNameButtom }
        </button>
    )
}

export default ButtomOpen;