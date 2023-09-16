import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({ handleAddCourse }) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('Course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="w-3/4 grid grid-cols-3 gap-3">
            {
                courses.map((course, idx) => <Course
                    handleAddCourse={handleAddCourse}
                    key={idx}
                    course={course}
                ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleAddCourse: PropTypes.func.isRequired
}

export default Courses;