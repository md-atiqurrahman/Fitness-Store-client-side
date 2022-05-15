import { useEffect, useState } from "react";

const useStoredProducts = () => {
    const [storedProducts, setStoredProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setStoredProducts(data))
    }, [])

    return[storedProducts, setStoredProducts]
}

export default useStoredProducts;