export default function Vid38Child(props){
    const data="anushka"
    return(
        <div>
            <h1>Child component-</h1>
            <button onClick={()=>props.alert(data)}>Click me</button>
        </div>
    )
}