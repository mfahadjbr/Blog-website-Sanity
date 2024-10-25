// Example for TypeScript
 // Ensure the correct path for the client

import client from "./lib/client";

export const fetchTutorials = async (query: string) => {
  const res = await client.fetch(query);
  return res;
};
