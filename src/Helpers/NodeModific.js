import { useEffect } from "react";

const HandleOnChange = (setNodes, setBgColor, isEdge, event) => {



  useEffect( () => {

      setNodes( (els) =>
        els.map((e) => {
          if ( isEdge(e) || e.id !== "dndnode1" ) {
            return e;
          }
    
          const color = event.target.value;
          console.log(color);
          setBgColor(color);
    
          return {
            ...e,
            data: {
              ...e.data,
              color,
            },
          };
        })
      );
  
  }, [ setBgColor ]);


};

export default HandleOnChange;
