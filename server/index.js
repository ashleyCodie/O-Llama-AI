import "dotenv/config"
import express from "express"
import cors from "cors"
import chatCompletion from "./chatCompletion.js"

const port = process.env.EXPRESS_PORT || 8080

const app = express()
app.use(express.json())
app.use(cors())
app.disable('x-powered-by')

app.use("/chat", chatCompletion)

app.listen(port, () => {
  console.log(`Ollama app listening on port ${port}`)
})
