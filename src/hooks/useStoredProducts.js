import { useEffect, useState } from "react";

const useStoredProducts = () => {
    const [storedProducts, setStoredProducts] = useState([]);


    useEffect(() => {
        fetch('https://salty-coast-80338.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setStoredProducts(data))
    }, [])

    return[storedProducts, setStoredProducts]
}

export default useStoredProducts;