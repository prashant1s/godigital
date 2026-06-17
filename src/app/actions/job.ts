"use server";

import { revalidatePath } from "next/cache";
import { checkAuthStatus } from "./auth";

type Job = {
  id: string;
  title: string;
  description: string;
};

export async function saveJobToDatabase(job: Job) {
  // 1. Security Check: Never trust the frontend! 
  // Always verify they still have the admin cookie before writing to the DB.
  const isAdmin = await checkAuthStatus();
  if (!isAdmin) {
    return { success: false, error: "Unauthorized. Please log in again." };
  }

  try {
    // ==========================================
    // 2. YOUR DATABASE LOGIC GOES HERE
    // ==========================================
    // Example if you were using MongoDB:
    // await db.collection("jobs").updateOne({ id: job.id }, { $set: job }, { upsert: true });
    
    // Example if you were using Prisma / Postgres:
    // await prisma.job.upsert({ where: { id: job.id }, update: job, create: job });
    
    console.log("Simulating saving to database:", job);
    
    // 3. Clear the Next.js cache so visitors see the update instantly
    revalidatePath("/careers");
    
    return { success: true };
  } catch (error) {
    console.error("Database error:", error);
    return { success: false, error: "Failed to save to database." };
  }
}