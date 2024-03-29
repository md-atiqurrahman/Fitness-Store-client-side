import { useEffect, useState } from "react";

const useStoredProducts = () => {
    const [storedProducts, setStoredProducts] = useState([]);


    useEffect(() => {
        fetch('https://gym-equipment-server-side1.vercel.app/products')
            .then(res => res.json())
            .then(data => setStoredProducts(data))
    }, [])

    return[storedProducts, setStoredProducts]
}

export default useStoredProducts;