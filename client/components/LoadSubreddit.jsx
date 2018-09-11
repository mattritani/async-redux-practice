import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

const LoadSubreddit = ({dispatch}) => (
  <React.Fragment>
    <button onClick={() => dispatch(fetchPosts('newzealand'))}>
        Get NZ Subreddit!
      </button>

      <form onSubmit={function(e){
        e.preventDefault()
      }}><input id='newSub' type='text'></input><button onClick={() =>
        dispatch(fetchPosts(document.getElementById('newSub').value))
      }> Get new subreddit! </button></form>

    </React.Fragment>
)
export default connect()(LoadSubreddit)
