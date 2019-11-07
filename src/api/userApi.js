// API proxy

export async function getUsers() {
  const response = await fetch("http://localhost:3001/users");
  if (response.ok) {
    return response.json();
  }
  throw new Error("Bad network response.");
}

export async function deleteUser(id) {
  const url = "http://localhost:3001/users/" + id;
  const response = await fetch(url, {
    method: "DELETE"
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error("Bad network response.");
}
