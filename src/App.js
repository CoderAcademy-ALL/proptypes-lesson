import React, { useState } from 'react';
import Post from './components/Post';



const App = () => {
  
  const post = {
    title: "PropTypes are useful",
    content: "This is really cool", 
    category: "Code", 
    modified_date: new Date(),
    username: "default"
  }

  return (
    <div >
          <Post post={post} />
    </div>
  )
}


export default App
