import React from 'react'

const Post = ({link,title, created,blurb,thumbnail}) => (
  <div>
  {/* <div>{link}></div>  */}
  <a href={'http://reddit.com'+link} target= '_blank'>{title}</a>{created}<br></br>
  <div>{blurb}</div>
  <img src ={thumbnail}/>

  



  </div>
  
  
)

export default Post
