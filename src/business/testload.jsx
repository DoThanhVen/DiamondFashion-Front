import { callAPI } from "../service/API";
import React, { useEffect, useState } from "react";
const LoadProduct = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        getproduct()
    }, []);

    const getproduct = async () => {
        const reponse = await callAPI(`/api/product`, "GET")
        setdata(reponse)
        console.log(reponse)
    }
    return (
        <>
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>image</th>
                </tr>
                {data.map((item) => (
                        
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.product_name}</td>
                            <td> 
                                {item?.image_product?.map((value)=>(
                                    <img src={`http://localhost:8080/api/uploadImageProduct/${value.url}`}></img>
                                ))}
                            </td>
                            
                        </tr>
                        
                    )
                )}



            </table>
        </>
    )
}

export default LoadProduct