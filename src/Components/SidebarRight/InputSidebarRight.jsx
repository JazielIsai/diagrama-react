


function InputSidebarRight() {


    return(
        <>
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
        
        </>
    )
}


export default InputSidebarRight;