# Ollama Frontend React + Vite

## Getting started

### Setup .env
```
VITE_PORT=3000
VITE_NODE_API=http://localhost:8081
```
- The VITE_PORT is just the port to run your frontend
- The VITE_NODE_API is the URL for your backend. It needs to match the same port that you have set on your backend.
- NOTE: If you are not using your own backend but instead are pointing to the instructor computer backend, then VITE_NODE_API should be `http://192.168.1.100:8081`

### Install dependencies
```
cd client
npm install
npm run dev
```
