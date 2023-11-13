function StudentProp(props){
    return(
        <div style={{backgroundColor:"blue",margin:"2px"}}>
    <h1>Props in React with {props.name}</h1>
    <h2>{props.email}</h2>
        </div>
    )
}
export default StudentProp;