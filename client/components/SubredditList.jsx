import React from 'react'
import {connect} from 'react-redux'

import Post from './Post'

const Subreddit = ({subreddits}) => (
  <div>
    {subreddits.map((post, i) =>
      <Post
        key={i}
        title={post.title}
        blurb={post.selftext}
        thumbnail={post.thumbnail}
        created ={(new Date(post.created*1000)).toString()}
        link = {post.permalink}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
