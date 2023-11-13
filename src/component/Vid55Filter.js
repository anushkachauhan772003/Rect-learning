import {useSearchParams} from "react-router-dom";
export default function Vid55Filter(){
    const[searchParams]=useSearchParams();
    console.warn(searchParams.get('age'))
    return(
        <div>
            <h1>Filter Page</h1>
        </div>
    )

} 