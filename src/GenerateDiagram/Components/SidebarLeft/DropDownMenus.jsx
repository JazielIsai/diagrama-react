import React from 'react';

function DropDownMenus( { nameDetalist, contentList } ) {

    return(
        <>
            <details>
                <summary className= 'description'>
                    { nameDetalist }
                </summary>
                <ol className="nodeLibrary">
                    {
                        contentList
                    }
                </ol>
            </details>

        </>
    )
}

export default DropDownMenus;