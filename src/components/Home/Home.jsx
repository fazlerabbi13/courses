import { useEffect, useState } from 'react';
import {BiDollar} from 'react-icons/bi';
import {BsBook} from 'react-icons/bs';
import Cart from '../Cart/Cart';
const Home = () => {

    const [course ,setcourse] = useState([]);
    const [selectCourse,setSelectCourse] =useState([]);

    useEffect(() =>{
        fetch('courses.json')
        .then(res =>res.json())
        .then((data) => setcourse(data))
    
    },[]);

    const handleSelectCourse =(course) => {
            const isExist =selectCourse.find((card) => card.id == course.id);
            if(isExist){
              return alert(`exist`)
            }
            else{
                setSelectCourse([...selectCourse,course]); 
            }
            
    }
    console.log(selectCourse);
    return (
        <div className='flex justify-between items ml-16'>
            <div className="card-container ml-12 mt-16 w-[950px] mx-auto grid grid-cols-3 gap-12"> 
                { 
                
                course.map((course) => (
                    <div  key={course.id} className="w-[310px] h-[430px] border-2">
                    <img className="ml-1 mt-3 w-[298px]" src={course.img} alt="" />
                    <h1 className="text-xl text-center mt-4">{course.course_name}</h1>
                    <p className="text-center mt-5">{course.details}</p>
                <div className='flex gap-16 mt-6 ml-9'>
                <div className='flex items-center'>
                    <p className='text-2xl'><BiDollar></BiDollar></p>
                    <p className='ml-2'>Price:{course.price} </p>
                </div>
                <div className='flex items-center'>
                    <p className='mr-2 text-2xl'><BsBook></BsBook></p>
                    <p> Credit:{course.credit} hr</p>
                </div>
             </div>
                <button onClick={() => handleSelectCourse(course)} className='text-2xl rounded-lg mt-12 w-[306px] h-[50px] bg-sky-300'>Select</button>
                
                
            </div>
                ))
                
                }
           </div>
           <div className="cart mt-16 mr-7 w-[430px] mx-auto">
            <Cart selectCourse ={selectCourse}></Cart>
           </div>
        </div>
    );
};

export default Home;