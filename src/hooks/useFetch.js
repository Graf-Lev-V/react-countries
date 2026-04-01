import { useState, useEffect, useRef } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const controllerRef = useRef();


    useEffect(() => {
        controllerRef.current = new AbortController();
        
        (async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url, { signal: controllerRef.current.signal });
                if (!response.ok) throw new Error("Request failed");
                const data = await response.json();
                setData(data)
            }
            catch (error) {
                if (error.name === 'AbortError') return;
                setError(error);
            }
            finally {
                setLoading(false);
            }
        })();

        return () => controllerRef.current.abort();
        
    }, [url]);

    
    return { data, loading, error };
}