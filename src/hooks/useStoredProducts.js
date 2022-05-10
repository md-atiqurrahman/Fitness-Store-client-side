import { useEffect, useState } from "react";

const useStoredProducts = () => {
    const [storedProducts, setStoredProducts] = useState([]);


    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setStoredProducts(data))
    }, [])

    return[storedProducts, setStoredProducts]
}

export default useStoredProducts;