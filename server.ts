import { serve } from "bun"

const port = Number(process.env.PORT) || 3000

const server = serve({
  port: port,
  fetch(request: Request) {
    return new Response("BUN BUN")
  },
})

console.info(`Sever running on port ${server.port}`)
