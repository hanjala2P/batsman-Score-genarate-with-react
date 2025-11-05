export default function Friend( {friend}){
    console.log(friend)
    const{ name,email}= friend;
    return(
        <div className="border">
            <p>Name :{ name}</p>
            <p>Email : {email}</p>
        </div>
    )
}