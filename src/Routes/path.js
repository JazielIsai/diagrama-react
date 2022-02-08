import ViewGenerateDiagramMain from '../GenerateDiagram/ViewGenerateDiagramMain';
import Login from '../LogingProyect/Login';
import Register from '../LogingProyect/Register';
import WorkflowDesigner from '../WorkflowDesigner/WorkFlowDesignerMain';

export const path = [
    {
        to: '/generate-diagram',
        path: "generate-diagram",
        Component: <ViewGenerateDiagramMain />,
        name: "Generate Diagram"
    },
    {
        to: '/login',
        path: "login",
        Component: <Login />,
        name: "Login"
    },
    {
        to: '/register',
        path: "register",
        Component: <Register />,
        name: "Register"
    },
    {
        to: '/workflow-designer',
        path: "workflow-designer",
        Component: <WorkflowDesigner />,
        name: "Workflow Designer"
    }
]