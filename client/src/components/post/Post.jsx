import React from 'react'
import "./post.css"

function Post({img}) {
    return (
        <div className="post">
            <img className="postImg" src={img} alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="Title">Lorem ipsum dolor</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatibus corrupti, 
                at sit quidem placeat, repudiandae suscipit in possimus cumque 
                architecto molestias voluptates, eveniet sunt nobis nihil adipisci error. Tempore?
            </p>

        </div>
    )
}

export default Post
