import { useEffect, useState } from 'react';
import {BiDollar} from 'react-icons/bi';
import {BsBook} from 'react-icons/bs';
const Home = () => {

    const [course ,setcourse] = useState([]);


    useEffect(() =>{
        fetch('courses.json')
        .then(res =>res.json())
        .then((data) => setcourse(data))
    
    },[]);
    return (
        <div className='flex justify-between items ml-16'>
           <div className="card-container ml-12 mt-14 w-[950px] mx-auto grid grid-cols-3 gap-8 mt-5">
                { 
                
                course.map(card => (
                    <div  key={course.id} className="w-[310px] h-[430px] border-2">
                    <img className="ml-1 mt-1 w-[298px]" src={course.img} alt="" />
                    <h1 className="text-2xl text-center mt-4">{course.course_name}</h1>
                    <p className="text-center mt-3">It is a long established fact that a 
                        reader will be distracted 
                        by the readable content of a 
                        page when looking at its layout.</p>
                <div className='flex gap-16 mt-4 ml-9'>
                <div className='flex items-center'>
                    <p className='text-2xl'><BiDollar></BiDollar></p>
                    <p className='ml-2'>Price: </p>
                </div>
                <div className='flex items-center'>
                    <p className='mr-2 text-2xl'><BsBook></BsBook></p>
                    <p> Credit: hr</p>
                </div>
             </div>
                <button className='text-2xl rounded-lg mt-8 w-[306px] h-[50px] bg-sky-300'>Select</button>
                
                
                </div>
                ))
                
                }
           </div>
           <div className="cart mt-12 w-[430px] mx-auto">
            <h2>this is cart</h2>
           </div>
        </div>
    );
};

export default Home;