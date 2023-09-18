import { CourseEntity } from "../entities/course-entity";
import { urlBase } from "../interfaces/url-base";

const urlToFecthCourses =  urlBase + "/courses";


export async function fetchCourses(): Promise<CourseEntity[]> {
  try {
    const response = await fetch(urlToFecthCourses);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Error fetching courses');
  }
}