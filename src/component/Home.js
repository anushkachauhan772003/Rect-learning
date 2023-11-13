import { Link ,useNavigate ,useLocation} from "react-router-dom";

 export default function Home(){
    const location=useLocation();
    console.warn(location);   
    const navigate=useNavigate();
    const navToPage=(url)=>{
        navigate(url)
    }

    return(
        <div style={{backgroundColor:"green"}}>
            <h1>Rect router Home page </h1>
            <p>This is our home page hope you liked it.</p>
            <p>Here we are learning reactJs with anil siddhu sir</p>
            <Link to="/about">Link to our about</Link>
            <button onClick={()=>navToPage('/about')}>Go to about page</button><br/><br/>
            <button onClick={()=>navToPage('/Vid55Filter')}>Go to filter page</button>
          
        </div>
    )
}