import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
  console.log("enrollUserInCourse: User ID = "+ userId)
}

export function findAllEnrollments() {
  // console.log("All Enrollments================")
  // console.log(Database.enrollments)
  return Database.enrollments;
}