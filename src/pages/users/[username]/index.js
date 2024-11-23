import { useRouter } from "next/router";
import Link from "next/link";
//import MyComponent from "@/components/MyComponents";
import dynamic from "next/dynamic";
import { useState , useEffect } from "react";
import Head from "next/head";
 
//import Mycomponent form "@/components/MyComponent";
const MyComponent = dynamic(()=>import("@/Components/MyComponent"));
export default function User(){
    //const router = useRouter();
    //const {username} = router.query;
 
    const [count,setCount] = useState(0);
    console.log("-count-",count)
 
    useEffect(()=>{
        if (count ===5){
            setCount(0);
        }
    },[count])
 
    return (
        <div>
            <Head>
                <title>User page</title>
            </Head>
            {/*<h1>User Page</h1>*/}
            {/*<h1>Username : {username}</h1>*/}
 
            <MyComponent title="Hello , next.js!"/>
 
            {/*<Link href='/posts/123/comments/456'>
                Go to Comment Page
            </Link>*/}
 
            <br />
            <p>Count : {count}</p>
            <button onClick={() => setCount(count +1)}>Increment</button><br />
            <button onClick={() => setCount(count -1)}>Decrement</button>
            <br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-[4px] rounded">
                Click me
            </button>
        </div>
    )
}