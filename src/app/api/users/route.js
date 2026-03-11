// app/api/users/route.js

const mockUsers = [
  { id: 1, name: "Alice Smith" },
  { id: 2, name: "Bob Johnson" },
];

export async function GET(request) {
  return Response.json({ users: mockUsers });
}
