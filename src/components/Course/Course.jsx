import PropTypes from 'prop-types';
import { BiDollar } from 'react-icons/bi';
import { FiBookOpen } from "react-icons/fi";

const Course = ({ course, handleAddCourse }) => {
    const { cover, title, description, price, credit } = course;
    return (
        <div className="bg-white p-3 rounded-2xl flex flex-col justify-between gap-3">
            <img className='w-full' src={cover} alt="" />
            <h4 className='font-semibold text-lg'>{title}</h4>
            <p className='text-gray-600'>{description}</p>
            <div className='flex justify-between'>
                <div className='flex items-center gap-1'>
                    <BiDollar className='text-lg'></BiDollar>
                    <p className='text-gray-600'>Price: {price}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <FiBookOpen className='text-lg'></FiBookOpen>
                    <p className='text-gray-600'>Credit: {credit}hr</p>
                </div>
            </div>
            <button onClick={() => handleAddCourse(course)} className='bg-[#2F80ED] hover:bg-[#22508d] w-full text-white font-semibold py-2 rounded-lg'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddCourse: PropTypes.func.isRequired
}

export default Course;