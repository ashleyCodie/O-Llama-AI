import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [prompt, setPrompt] = useState("What is the most tacos a human has eaten in one sitting?")
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [responseText, setResponseText] = useState("")

  const updatePrompt = (e) => {
    if (e.key.toLowerCase() === 'enter') {
      submitQuestion()
    }
  }

  const submitQuestion = async () => {
    setSubmitDisabled(true)
    console.log(prompt)
    const response = await axios.post(`${import.meta.env.VITE_NODE_API}/chat`, { "model": "mistral", "prompt": prompt })
    console.log(response)
    setResponseText(response.data.homework)
    setSubmitDisabled(false)
  }

  return (
    <div>
      <div className="m-3">
      <input
        onKeyUp={(e) => updatePrompt(e)}
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
        className="bg-slate-400 w-xl text-yellow-200 border-2 rounded-lg border-amber-600 mr-2 focus:border-amber-400 h-[3rem]"
      />
      <button
        onClick={submitQuestion}
        type="button"
        disabled={submitDisabled}
        className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-amber-600 dark:hover:bg-amber-700 focus:outline-none dark:focus:ring-amber-800 disabled:opacity-50"><img src="/public/ollama.png" className="w-6" alt="ollama logo" /></button>
      </div>
      <div className="m-3 text-purple-300">{responseText}</div>
    </div>
  )
}

export default App
