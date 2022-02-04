import React, { useState, useEffect, useContext } from 'react';
import InputSidebarRight from './InputSidebarRight';
import ParamsSidebarRight from './ParamsSidebarRight';
import DescriptionSidebarRight from './DescriptionSidebarRight';

import { IdContext } from '../../../Hooks/IdNodeContext';

function SidebarRight( /*{ setElements, idComponente }*/ ){

    const [ onChangeValue, setOnChangeValue ] = useState('');
    // const [ idComponent, setIdComponent ] = useState('');
    // const id = idComponente;

    const { idNode, setIdNode } = useContext(IdContext);

    const onChange = (event) => {
        setOnChangeValue(event.target.value);
        console.log(event.target.value);

    }

 
    const onClick = (e) => {
        e.preventDefault();
        console.log(e)
        //console.log(id)
        // if( onChangeValue.trim().length > 4 ) {
        //     setElements( (els) => {
        //         console.log(els, els[0].id)
        //         if( els[0].id === id ) {
        //             console.log('id es: ',id, 'id es: ', els[0].id);
        //             //return els[0].data.label = onChangeValue;
        //         }
        //     })
        // }

    }



    return (
        <aside className="asideRight">
            <p className='description'> Modific the nodes </p>
            <p> Node's ID is { idNode } </p>
            
            <div className='asideRight-right'>
                <input 
                    type="text"
                    id="modific"
                    onChange={ onChange }

                />
                <input 
                    type='submit'
                    onClick = { onClick }
                />
            </div>

            <hr />
            <InputSidebarRight />
            <hr/>
            <ParamsSidebarRight />
            <hr/>
            <DescriptionSidebarRight />

        </aside>
    )
}

export default SidebarRight;