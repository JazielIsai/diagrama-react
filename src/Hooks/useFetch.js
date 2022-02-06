import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) =>{

    //In true is monted the component
    const isMounted = useRef(true);
    const [ stateData, setStateData ] = useState( {
        data: null,
        loading: true,
        error: null
    });

    useEffect( () => {

        return () => {
            isMounted.current = false;
        }
    }, [] );

    useEffect( () => {
        setStateData({
            data: null,
            loading: true,
            error: null
        })

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                //if isMounted is mounted then made is:
                if( isMounted.current ){
                    setStateData({
                        loading: false,
                        error: null,
                        data: data
                    });
                } 
            })
            .catch( err => console.log(err) )

    }, [url] )

    return stateData;
    
}

