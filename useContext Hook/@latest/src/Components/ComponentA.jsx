import { useState, createContext } from 'react'
import ComponentB  from './ComponentB.jsx';

export const UserContext = createContext()
function ComponentA(){
    const [user,setUser] = useState("Arham Khalid")
    return(
        <div className = "box">
            <h1>ComponentA</h1>
            pr
            <h2>{`This is ${user}`}</h2>
            <UserContext.Provider value={user}>
            <ComponentB user = {user} />
            </UserContext.Provider>
        </div>
    )
}
export default ComponentA