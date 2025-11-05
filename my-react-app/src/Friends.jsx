import { use } from "react"
import Friend from "./Friend";

export default function Friends({friendsPromise}){
    const friends = use(friendsPromise);
    console.log(friends);
    return(
        <div className="border">
            <h3>Friends : {friends.length}</h3>
            {
                friends.map( friend => <Friend key={Friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}