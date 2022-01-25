import React, { useState, useEffect } from 'react';


function SidebarRight( { setElements, idComponente } ){

    const [ onChangeValue, setOnChangeValue ] = useState('');
    const id = idComponente;

    const onChange = (event) => {
        setOnChangeValue(event.target.value);
        console.log(event.target.value);

    }
    const onClick = (e) => {
        e.preventDefault();
        //console.log(e)
        //console.log(id)
        if( onChangeValue.trim().length > 4 ) {
            setElements( (els) => {
                console.log(els, els[0].id)
                if( els[0].id === id ) {
                    console.log('id es: ',id, 'id es: ', els[0].id);
                    //return els[0].data.label = onChangeValue;
                }
            })
        }

    }



    return (
        <aside className="asideRight">
            <p className='description'> Modific the nodes </p>
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

            <div className='NodeProperties'>
                <h3>Inputs</h3>
                <div>
                    <label htmlFor='input'> Seq1: </label>
                    <select>
                        <option value='' disabled > Select Text Input </option>
                        <option value='Text Input 1'>Text Input 1</option>
                        <option value='Text Input 2'>Text Input 2</option>
                    </select>
                    <label htmlFor='input'> Seq2: </label>
                    <select>
                        <option value='' disabled > Select Text Input </option>
                        <option value='Text Input 1'>Text Input 1</option>
                        <option value='Text Input 2'>Text Input 2</option>
                    </select>

                </div>
            </div>
            <hr/>

            <div className='NodeProperties'>
                <h3>Params</h3>
                <div>
                    <label htmlFor=''> --format </label>
                    <input
                        type='text'
                        placeholder='fasta'
                    />
                    <label htmlFor=''> --dir_path </label>
                    <input
                        type='text'
                        placeholder=''
                    />
                </div>
            </div>
            <hr/>

            <div className='NodeProperties'>
                <h3>Description</h3>
                <textarea
                    rows={5}
                >

                </textarea>
            </div>

        </aside>
    )
}

export default SidebarRight;