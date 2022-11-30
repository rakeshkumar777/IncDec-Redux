import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber,decNumber} from '../redux/actions/action'

const Main = () => {
const myState=useSelector((state)=>state.changeNumber)
const dispatch=useDispatch();
    return (
        <>
         
                <div style={{ marginTop: "200px", marginLeft: "50vw", display: "flex" }}>


               
                    <button onClick={()=>dispatch(decNumber())} style={{ height: "30px", width: "30px", marginLeft: '10px' }}>-</button>
                    <input value={myState} style={{ height:"30px",width: "50px", paddingLeft: "8px", fontSize: "25px" }}/>
                    <button onClick={()=>dispatch(incNumber())} style={{ height: "30px", width: "30px", marginRight: "10px" }}>+</button>
                </div>
          

        </>
    )
}

export default Main
