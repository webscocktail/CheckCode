import React, { useState, useEffect }  from 'react';
import Editor from'./Editor'
import useLocalStorage from '../hooks/useLocalStorage'
import pic from './cclogoo.png'

function App() {
  const[html, setHtml] = useLocalStorage('html', '')
  const[css, setCss] = useLocalStorage('css', '')
  const[js, setJs] = useLocalStorage('js', '')
  const[srcDoc, setSrcDoc]= useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
       setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `)
    }, 250)

    return() => clearTimeout(timeout)
   }, [html, css, js])
  


  return (
    <>
    <div class="logo">
      <img src={pic} alt="logo" className="pic"
      height={70}
      />
    </div>
    <div className="pane top-pane">
      <Editor 
      language="xml"
      displayName="HTML"
      value={html}
      onChange={setHtml}
      />
      <Editor
      language="xml"
      displayName="CSS"
      value={css}
      onChange={setCss}
      />
      <Editor
      language="xml"
      displayName="JS"
      value={js}
      onChange={setJs}
      />
    </div>
    <div className="pane">
      <iframe
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="100%"
       />
    </div>
    </>
  )
}

export default App;