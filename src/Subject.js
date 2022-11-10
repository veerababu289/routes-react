import React ,{ useState} from 'react'
import Result from './Result';




function Subjects(props)
{
const [Marks,setMarks]=useState()


const [English,setEnglish]=useState(" ");
const [Maths,setMaths]=useState(" ");
const [Science,setScience]=useState("");
const [Social,setSocial]=useState("");
const submit=(e)=>{
e.preventDefault();
const nda={
English:English,
Maths:Maths,
Science:Science,
Social:Social
}
props.result(nda);
}





return (
<div>
<h1>Marks</h1>
<form action="" onSubmit={submit}>
<div>
<label>English</label>
<input type="text" name="English" value={English} onChange={(e)=>setEnglish(e.target.value)}/><br></br><br></br>
</div>
<div>
<label>Maths</label>
<input type="text" name="Maths" value={Maths} onChange={(e)=>setMaths(e.target.value)}/><br></br><br></br>
</div>
<div>
<label>Science</label>
<input type="text" name="Science" value={Science} onChange={(e)=>setScience(e.target.value)}/><br></br><br></br>
</div>
<div>
<label>Social</label>
<input type="text" name="Social" value={Social} onChange={(e)=>setSocial(e.target.value)}/><br></br><br></br>
</div>
<button type="submit">submit</button><br></br><br></br>



</form>
</div>

);
}
export default Subjects;