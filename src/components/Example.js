import React, { useContext } from 'react'
import StyleContext from './StyleContext'
import '../App.css'

function Example() {
    const [styledText, styledLink] = useContext(StyleContext)
  return (
    <div style={styledText}>
        <p>Customized Text</p>
        <a href="https://www.google.com/" style={styledLink} className='my-link'>Go to Google</a>
    </div>
  )
}

export default Example