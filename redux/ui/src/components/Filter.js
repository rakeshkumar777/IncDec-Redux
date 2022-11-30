import React,{useState} from 'react'

const counteries=["india","uk","usa","rusia","japan","indoneshia"];


const Filter = () => {
    const [filteredCounteries,setFilteredCounteries]=useState(counteries);

  return (
    <>
    <center>
      <input type="text"
      placeholder="search here"
      onChange={()=>{
        setFilteredCounteries([...counteries].filter((e)=>e.indexOf(e.target.value)===0))}}/>
      
      {filteredCounteries.map((e,index)=>{return(<div key={index}>{e}</div>)})}




      </center>
    </>
  )
}

export default Filter
