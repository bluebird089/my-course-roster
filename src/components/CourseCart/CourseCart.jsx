import PropTypes from 'prop-types';

const CourseCart = ({ addedCourses }) => {
    return (
        <div className="w-1/4 bg-white h-min p-5 rounded-2xl space-y-3">
            <h3 className="text-center text-lg font-semibold text-[#2F80ED]">Credit Hour Remaining: 20 hr</h3>
            <hr />
            <h3 className="font-bold text-lg">Course Name:</h3>
            <div className="text-gray-500 ml-6">
                <ol className="list-decimal">
                    {
                        addedCourses.map((addedCourse, idx) => <li key={idx}>{addedCourse}</li>)
                    }
                </ol>
            </div>
            <hr />
            <p className="text-lg font-semibold">Total Credit Hour: </p>
            <hr />
            <p className="text-lg font-semibold">Total Price: 40000$</p>
        </div>
    );
};

CourseCart.propTypes = {
    addedCourses: PropTypes.array.isRequired
}

export default CourseCart;