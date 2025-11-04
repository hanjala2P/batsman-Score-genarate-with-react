import { use } from "react"

export default function Friends({friendsPromise}){
    const friends = use(friendsPromise);
    console.log(friends);
    return(
        <div className="border">
            <h3>Friends : {friends.length}</h3>
        </div>
    )
}