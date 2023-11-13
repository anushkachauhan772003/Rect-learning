function Vid21Child(props){
    return(
        <div>
            <h1>Child Component in pass props in function</h1>
            <button onClick={props.data}>Call data Function</button>
        </div>
    )
}
export default Vid21Child;