import React from 'react';
import ButtomOpen from './ButtomOpen';


function FromLibrary () {


    return(
        <div className="from-library">
            <ButtomOpen setNameButtom = { 'InteractionsWorkFlow' } />
            <ButtomOpen setNameButtom = { 'Sequence Alignment' } />
            <ButtomOpen setNameButtom = { 'Structure Aligment' } /> 
            <br />                       
            <ButtomOpen setNameButtom = { 'mAB from pAB' } />                        
            <ButtomOpen setNameButtom = { '2D classification' } />                        
            <ButtomOpen setNameButtom = { '3D reconstruction' } />  
        </div>
    )
}

export default FromLibrary;