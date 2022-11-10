import React,{useState,useEffect} from 'react'

const Task = () => {
    const [data,setData] = useState("Rohith")
   
    useEffect(() => { 
        console.log(data)
    },[data])
  return (
    <div>
       
       
       
    </div>
  )
}

export default Task