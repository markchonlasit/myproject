import { useRouter } from "next/router"
export default function Comment(){
    const router = useRouter();
    const {id,commentid} = router.query;

    return <div>
        <h1>Post ID: {id}</h1>
        <h1>Comment ID: {commentid}</h1>
    </div>
}