import ComponentC from './ComponentC.jsx'

function ComponentB({user}){
    return(
        <div className = "box">
            <h1>ComponentB</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentC />
        </div>
    )
}
export default ComponentB