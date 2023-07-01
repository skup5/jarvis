// export const ledController = require("./LedController");

import { serve } from "https://deno.land/std@0.187.0/http/server.ts";

// Jarvis backend server
// @see https://deno.com/manual@v1.33.3/examples/http_server


const port = 8080;

const handler = (request: Request): Response => {
  const body = `Your user-agent is:\n\n${
    request.headers.get("user-agent") ?? "Unknown"
  }`;

  return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await serve(handler, { port });
