
const Cart = ({selectCourse}) => {
    console.log(selectCourse);
    return (
        <div>
            <h2 className="mb-2 text-2xl">Course Name</h2>
            {
                selectCourse.map(course => (
                    <ol><li>{course.course_name}</li></ol>
                ))
            }
        </div>
    );
};

export default Cart;