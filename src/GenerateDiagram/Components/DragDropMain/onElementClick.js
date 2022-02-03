

export const onElementClick = ( event, element ) => {
    const id = element.id;

    console.log('Evento Click', element, id);
    return id;
}