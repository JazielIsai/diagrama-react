
//Call event.preventDefault() method to allow the dropping of elements in other 
//elements by preventing the default handling of the element.
//onDragOver: It specifies where the dragged data can be dropped.

export const onDragOver = ( event ) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
}
