import React from 'react';



function File(){


    return(
        <div className="file-container">
            <label htmlFor="file"> File:  </label>
            <select id="file">
                <option value="Save">Save</option>
                <option value="Import">Import</option>
                <option value="Export JSON">Export JSON</option>
            </select>
        
        </div>
    )
}

export default File;