import { MiniMap } from 'react-flow-renderer';

function MiniMapReactFlow( { nodes } ) {



    return(
        <>
            <MiniMap
                nodeStrokeColor = {   (n) => {
                        if (n.type === 'input') return '#0041d0';
                        if (n.type === 'output') return '#ff0072';
                    } 
                }
                nodeColor = { (n) => {
                        nodes.map( node => { 
                            if (n.type === node) return '#32ee21';
                            return '#fff';
                        })
                    } 
                }
            />
        
        </>
    )
}

export default MiniMapReactFlow;