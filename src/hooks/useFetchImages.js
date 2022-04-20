import { useState, useCallback, useEffect } from "react";

export const useFetchImages = () => {
    const [images, setImages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(true)

    const peticion = useCallback(async () => {
        const key = "client_id=jd49bbC3_peFAz7XA3q0OpcuTPHjUZzmdLOhp1kKSZg";
        let route = `https://api.unsplash.com/photos/?${key}`;
        if (input !== "") {
            route = `https://api.unsplash.com/search/photos/?query=${encodeURI(input)}&${key}`;
        }
        setLoading(true)
        const res = await fetch(route);
        const data = await res.json();
        if (data.results) {
            setImages(data.results);
        } else {
            setImages(data);
        }
        setLoading(false)
    }, [input]);

    useEffect(() => {
        peticion();
    }, [input, peticion]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target[0].value;
        setInput(text);        
    };

    return [
        images, loading, handleSubmit
    ]
}
