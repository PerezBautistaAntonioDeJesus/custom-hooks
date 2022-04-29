import { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {

    // useRef agregado par aevitar que se intente renderizar el componente si ya se ha ocultado
    // se usa el ref como condicionante para llamar al setState
    const isMounted = useRef(true);
    useEffect(() => {
      return () => {
        isMounted.current = false
      }
    }, [])
    
    
    const [state, setState] = useState({ data: null, loading: true, error: null});


    useEffect(() => {

        setState(
            {
                ...state,
                loading: true
            }
        );

        fetch( url )
        .then( resp => resp.json())
        .then( data => {

            if ( isMounted.current ){
            
                setState({
                    loading: false,
                    error: null,
                    data: data
                });

            }

        });
    }, [ url ]);
    

    return state

}
