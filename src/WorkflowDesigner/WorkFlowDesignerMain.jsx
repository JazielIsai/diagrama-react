import Workflows from "./Components/Workflows";
import React, { useState, useEffect } from "react";
import '../Assets/css/workflowDesigner.css';



const WorkflowDesigner = () => {

    const [generalWorkFlow, setGeneralWorkFlow] = useState([]);
    const [myWorkFlows, setmyWorkFlows] = useState([]);
    const [myBlocks, setmyBlocks] = useState([]);

    function service_get_public_workflows() {
        fetch('http://viperdb.scripps.edu/Lab/Workflow/nodes.php?serviceName=get_public_workflows')
            .then(res => res.json())
            .then(data => {
                setGeneralWorkFlow(data);
                console.log(data);
            })

    }
    
    function service_get_user_workflows() {
        fetch('http://viperdb.scripps.edu/Lab/Workflow/nodes.php?serviceName=get_user_workflows')
            .then(res => res.json())
            .then(data => {
                setmyWorkFlows(data);
                console.log(data);
            })
    }
    
    function service_get_user_nodes() {
        fetch('http://viperdb.scripps.edu/Lab/Workflow/nodes.php?serviceName=get_user_nodes')
            .then(res => res.json())
            .then(data => {
                setmyBlocks(data);
                console.log(data);
            })
    }

    useEffect(() => {

        service_get_public_workflows()
        service_get_user_workflows()
        service_get_user_nodes()
    
    }, []);

    return (
        <div className="container">
            <header className='header'>
                <div class="containerh">
                    <h3> End </h3>
                    <h3> Workflow Designer </h3>
                    <h3> Log out </h3>
                </div>
            </header>

            <Workflows titles={'General Workfows'} arrayWorkFlow={generalWorkFlow} className={'stylebutton  colorblue'} />
            <br></br>
            <br></br><br></br>
            <Workflows titles={'My Workflows'} arrayWorkFlow={myWorkFlows} className={'stylebutton colorgreen'} />
            <br></br>
            <br></br><br></br>
            <Workflows titles={'My blocks'} arrayWorkFlow={myBlocks} className={'stylebutton colororange'} />
        </div>
    )
}

export default WorkflowDesigner;