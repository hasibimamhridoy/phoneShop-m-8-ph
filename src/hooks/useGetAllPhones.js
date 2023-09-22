import { useEffect, useState } from "react";

const useGetAllPhones = () => {
    
    const [phones,setPhones] = useState()
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{

        fetch(`/phones.json`)
        .then(res=>res.json())
        .then(data=>{
            setPhones(data)
            setIsLoading(false)
        })
        .catch(e=>{
            setIsLoading(false)
        })

    },[])

    return [phones,isLoading]

};

export default useGetAllPhones;