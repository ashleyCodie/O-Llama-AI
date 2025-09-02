# Ollama

## What do?
- Build yourself an UI, to use the AI, something like ```npm create vite@latest```
- Axios POST call, to http://192.168.1.100:8081/chat
- With the object { "model": "mistral", "prompt": prompt }, where prompt is your homework question.
- Something like axios.post(\`${import.meta.env.VITE_NODE_API}/chat\`, { "model": "mistral", "prompt": prompt })
- Probably want some kind of .env file with the following
- ```VITE_NODE_API=http://192.168.1.100:8081```

## Note
You could just like borrow the client from this project or whatever.
