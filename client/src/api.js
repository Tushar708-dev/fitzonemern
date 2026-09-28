// One tiny helper for talking to our Express API.
// Usage:  const data = await api.get("/exercises");   await api.post("/bmi", { height: 172 });

async function request(path, method = "GET", body) {
  const res = await fetch("/api" + path, {
    method,
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Something went wrong");
  return data;
}

export const api = {
  get: (path) => request(path),
  post: (path, body) => request(path, "POST", body),
  del: (path) => request(path, "DELETE"),
};
