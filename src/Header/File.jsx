import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

import FromLibrary from "./ImportFile_File/OpenFrom/FromLibrary";
import FromFile from './ImportFile_File/OpenFrom/FromFile';


function File() {

    const [ openModal, setOpenModal ] = useState( false );
    const [selectOpenFrom, setSelectOpenFrom ] = useState( false );


    const handleOnClick = () => {
        setOpenModal( !openModal );
    }
    
    const handleOnClickOpenForm = () => {
        
        setSelectOpenFrom( !selectOpenFrom );
    }



    return (
        <div className="file-container">

            <Button onClick={ handleOnClick } color="danger"> Import </Button>


            <Modal
                isOpen = { openModal }
            >
                <ModalHeader toggle={ handleOnClick }>
                
                    <buttom  className="btn btn-outline-primary" id="fromlibrary" onClick={ handleOnClickOpenForm } > From Library </buttom>
                    <buttom className="btn btn-outline-primary" id='fromfile' onClick={ handleOnClickOpenForm } > From File </buttom>
                
                </ModalHeader>
                <ModalBody>
                    {
                        selectOpenFrom === false ? <FromLibrary /> : <FromFile />
                    }
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={ handleOnClick }
                    >
                        Do Something
                    </Button>
                    {' '}
                    <Button onClick={ handleOnClick }>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default File;