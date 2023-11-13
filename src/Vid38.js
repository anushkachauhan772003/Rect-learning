import Vid38Child from "./Vid38Child"
export default function Vid38(){
   function parentAlert(data){
    alert(data)
   }
return(
  
    <div>
        <h1>Lift stating UP</h1>
        <Vid38Child alert={parentAlert}/>
    </div>
)
}