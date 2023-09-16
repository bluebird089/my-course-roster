import PropTypes from 'prop-types';

const CourseCart = ({ addedCourses, remaining, totalCredit, price }) => {
    console.log(addedCourses, remaining, totalCredit, price)
    return (
        <div className="w-1/4 bg-white h-min p-5 rounded-2xl space-y-3">
            <h3 className="text-center text-lg font-semibold text-[#2F80ED]">Credit Hour Remaining: {remaining}</h3>
            <hr />
            <h3 className="font-bold text-lg">Course Name:</h3>
            <div className="text-gray-500 ml-6">
                <ol className="list-decimal">
                    {
                        addedCourses.map((addedCourse, idx) => <li key={idx}>{addedCourse.title}</li>)
                    }
                </ol>
            </div>
            <hr />
            <p className="text-lg font-semibold">Total Credit Hour: {totalCredit}</p>
            <hr />
            <p className="text-lg font-semibold">Total Price: {price}</p>
        </div>
    );
};

CourseCart.propTypes = {
    addedCourses: PropTypes.array.isRequired,
    remaining: PropTypes.number.isRequired,
    totalCredit: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
}

export default CourseCart;