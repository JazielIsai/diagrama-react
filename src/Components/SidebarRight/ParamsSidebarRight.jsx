

function ParamsSidebarRight() {


    return(
        <>
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

        </>
    )
}

export default ParamsSidebarRight;