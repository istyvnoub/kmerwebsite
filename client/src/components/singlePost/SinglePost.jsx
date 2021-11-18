import React from 'react'
import "./singlePost.css"

function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostwrapper">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />
                <h1 className="singlepostTitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 

                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                    
                </h1>
                <div className="singlePostInfo">
                    <span>Author:<b>Safar</b></span>
                </div>
            </div>
        </div>
        
    )
}

export default SinglePost
