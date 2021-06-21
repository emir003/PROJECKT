import React from "react";
import {useState} from "react"
import {registration} from "../actions/users"


export default function Reg() {

const [userName,setUserName] = useState("")  
const [password,setPassword] = useState("")
const [firstName,setFirstName] = useState("")
const [lastName,setLastName] = useState("")

  return(
<>
<div>
<input className="user-name" placeholder="user-name" onChange={e=> setUserName(e.target.value)} value={userName}></input>
<input className="password" placeholder="password" onChange={e=> setPassword(e.target.value)} value={password}></input>
<input className="first-name" placeholder="first-name" onChange={e=> setFirstName(e.target.value)} value={firstName}></input>
<input className="last-name" placeholder="last-name" onChange={e=> setLastName(e.target.value)} value={lastName}></input>
<button onClick={registration(userName,password,firstName,lastName)}>register</button>
</div>
</>
     )
}
