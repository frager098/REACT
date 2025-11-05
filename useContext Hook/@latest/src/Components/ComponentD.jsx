import { useContext } from "react"
import { UserContext } from "./ComponentA"
function ComponentD(){
    const user = useContext(UserContext)
    console.log(user)
    return(
        <div className = "box">
            <h1>ComponentD</h1>
            <h2>This is {user}</h2>
 
        </div>
    )
}
export default ComponentD