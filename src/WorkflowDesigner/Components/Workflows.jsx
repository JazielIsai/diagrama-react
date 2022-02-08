import React, { useState } from 'react';
import Btn from './Button';

function Workflows({ arrayWorkFlow, className, titles }) {

    return (
        <div>
            <h2 className='title'>
                {titles}
            </h2>
            {
                arrayWorkFlow !== null &&
                <div className='btn-scroll-x'>
                    {
                        arrayWorkFlow.map(elemento => {
                            return (
                                <Btn key={elemento.id} className={className} text={elemento.name} id={elemento.id} />
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Workflows
