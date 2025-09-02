import express from "express"
import axios from "axios"

const chatCompletion = express.Router()

chatCompletion.post("/", async (req, res) => {
  const { model, prompt } = req.body
  console.log(model, prompt)
  const response = await axios.post(`${process.env.OLLAMA_API}`, { model: "mistral", prompt: prompt })

  let responseText = ""
  const responseLines = response.data.split("\n")
  for (const d of responseLines) {
    try {
      const obj = JSON.parse(d)
      // console.log(obj.response)
      responseText += obj.response
    }
    catch (err) {
      // Do nothing but log
      console.log("This llama won't make donuts")
    }
  }
  console.log("responseText", responseText)
  res.status(200).json({ "homework": responseText })
})

export default chatCompletion