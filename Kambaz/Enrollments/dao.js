import model from "./model.js";

export function enrollUserInCourse(userId, courseId) {
  const newEnrollment = { user: userId, course: courseId, _id: `${userId}-${courseId}` };
 return model.create(newEnrollment);
}

export function unenrollUserInCourse(userId, courseId) {
  return model.deleteOne({ userId, courseId });
}

export function findAllEnrollments() {
  return model.find();
}