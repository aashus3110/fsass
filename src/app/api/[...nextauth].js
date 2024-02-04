import connectMongoDB from "@/lib/db";
import loggerMiddleware from "@/middleware/loggerMiddleware";
import { postUser, getUsers, deleteUser } from "@/app/api/users/route";
import { NextResponse } from "next/server";

// Apply the logger middleware globally for all routes
export default async function handler(req, res) {
  // Apply the logger middleware
  await loggerMiddleware(req, res, async () => {
    try {
      await connectMongoDB(); // Connect to MongoDB for every request

      switch (req.method) {
        case 'POST':
          await postUser(req);
          break;
        case 'GET':
          await getUsers(req);
          break;
        case 'DELETE':
          await deleteUser(req);
          break;
        default:
          res.status(400).json({ error: "Invalid request method" });
          break;
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  });
}
