import React, {useState} from 'react'

const Student = (props) => {
    const [data,setData] = useState("")

const handler = (e) => {
    setData(e.target.value)
}

const handler1 = (e) => {
    e.preventDefault()
    props.onSubmit(data)
}

  return (
    <div>
       <form>
        <input type="text" onChange = {handler} />
        <button onClick= {handler1}>Add</button>
       </form>
    </div>
  )
}

export default Student


// import React from 'react'
// import Student from './Student'
// const App = () => {
//   const getData = (data) => {
//     console.log(data, "from app.js")
//   }
//   return (
//     <div style = {{margin:'150px'}}>
//       <center>
//       <Student onSubmit= {getData} />
//       </center>
//     </div>
//   )
// }

// export default App