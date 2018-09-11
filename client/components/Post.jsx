import React from 'react'

const Post = ({title,blurb,thumbnail}) => (
  <div>
<div>{title}</div><br></br>
  <div>{blurb}</div>
  <img src ={thumbnail}/>
  



  </div>
  
  
)

export default Post
