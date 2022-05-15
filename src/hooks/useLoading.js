import { useEffect, useState } from "react";

const useLoading = (storedProducts) =>{
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 0);
    }, [storedProducts]);
    
   return [loading]
}

export default useLoading;