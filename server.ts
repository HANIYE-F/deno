
import { serve } from "https://deno.land/std/http/server.ts";


const handler = (req: Request) => {
  return new Response("Hello from Deno!", {
    headers: { "content-type": "text/plain" },
  });
};


console.log("Server running at http://localhost:8000");


await serve(handler);
