import React from 'react'

const Result = (props) => {
// const res=props.prop1;
const res=props.prop1;
console.log(res)
//const res1=props.setmarks

if(props.prop1!=undefined)
{
var nda=[]
// console.log(props.prop1,'from result')
nda.push(props.prop1)
// console.log(nda.English,'from result')
if(nda.length>0)
{
console.log(nda.length)
console.log(nda[0].English,'da data')

// // da.push(props.prop1)
// console.log(da,'type eesult vbalue')
// da=props.prop1;


}}





return (
<div>

{nda?.length>0?
<table border={2} width="50%" cellPadding={20}>

<tr>

<th>Subject</th>
<th>Result</th>
 <th>Grade</th> 
</tr>




<tr>
<td>English</td>

<td>{nda[0]?.English}</td>

</tr>
<tr><td>Maths</td>
<td>{nda[0]?.Maths}</td>
 <td></td> 
</tr>
<tr><td>Science</td>
<td>{nda[0]?.Science}</td>

</tr>
<tr><td>Social</td>
<td>{nda[0]?.Social}</td>

</tr>


</table>
:<h1>no </h1>}
</div>
)
}

export default Result
