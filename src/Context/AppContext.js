import { createContext, useEffect, useState } from "react";
const API = "https://www.omdbapi.com/?apikey=7272e9cd&s=titanic"
const AppContext=createContext();
const AppProvider=({children})=>{

const[items,setItems]=useState([])
    const getItems=async(url)=>{
        try {
            const res=await fetch(url);
            const resData=await res.json();
            console.log(resData);
            if (resData.Response==="True"){
                

            setItems(resData.Search);
            
            }
        } catch (error) {
            
        }

    }
    useEffect(()=>{
        getItems(API);
    },[])
    return(
        <AppContext.Provider value={{items}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}