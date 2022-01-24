import React, { useState } from 'react';

function DndNode ( { onDragStart, nodeType, textNode } ) {
    

    return(
        <div
            className="dndnode"
            onDragStart={ (event) => onDragStart(event, nodeType)}
            draggable
        >
            { textNode }
        </div>
    )
}

export default DndNode;