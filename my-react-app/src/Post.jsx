export default function Post({post}){
    return(
        <div className="post">
            <h5>title : {post.title}</h5>
            <p>post : {post.body}</p>
        </div>
    )
}