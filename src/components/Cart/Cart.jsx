
const Cart = ({selectCourse,creditRemaining,totalCredit}) => {
    return (
        <div>
            <h3 className="text-xl mt-6">Credit Hour Remaining= {creditRemaining} hr</h3>
            <h2 className="mb-2 mt-6 text-2xl">Course Name</h2>
            {
                selectCourse.map(course => (
                    <ol key={course.id}><li>{course.course_name}</li></ol>
                ))
            }

            <h3 className="text-xl mt-6">Total Credit Hour:{totalCredit}</h3>
        </div>
    );
};

export default Cart;