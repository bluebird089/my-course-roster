import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('Course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="w-3/4 grid grid-cols-3 gap-3">
            {
                courses.map((course, idx) => <Course key={idx} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;