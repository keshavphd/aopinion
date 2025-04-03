import React, { useState } from 'react';
import { FaBookReader } from 'react-icons/fa';
import { RiProfileLine } from 'react-icons/ri';
import { MdAccountBalance } from "react-icons/md";
import { FcClapperboard } from "react-icons/fc";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const CustomPrevArrow = ({ onClick }) => {
  return (
<div className='absolute w-14 h-14 p-3 shadow-lg top-4.5 -left-10 md:-left-16 rounded-full' onClick={onClick}>
  <div className='flex items-center justify-center'>
  <FaArrowLeftLong size={29}/>
  </div>
</div>

  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <div className='absolute w-14 h-14 p-3 shadow-lg top-4.5 -right-10 md:-right-16 rounded-full' onClick={onClick}>
      <div className='flex items-center justify-center'>
      <FaArrowRightLong size={29}/>
      </div>
</div>
  );
};

const ProfileSlide = () => {
  const [activeSlides,setActiveSlides] = useState("Basic");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for larger screens
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <CustomNextArrow />, // Pass custom next arrow
    prevArrow: <CustomPrevArrow />, // Pass custom previous arrow
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600, // For mobile devices
        settings: {
          slidesToShow: 1, // Show one slide at a time
          slidesToScroll: 1,
          infinite: true,
          dots: false, // Enable dots for better navigation on mobile
        },
      },
    ],
  };

  const slideData = [
    {
      image: <RiProfileLine size={32}/>,
      name: "Basic",
    },
    {
      image: <FaBookReader size={32}/>,
      name: "Educational",
    },
    {
      image: <MdAccountBalance size={32}/>,
      name: "Financial",
    },
    {
      image: <FcClapperboard size={32}/>,
      name: "Lifestyle & Entertainment",
    },
    {
      image: <PiShoppingCartSimpleFill size={32}/>,
      name: "Shopping",
    },
  ];

  const renderSlide = () =>{
    switch(activeSlides){
      case "Basic":
        return(
          <form className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="sticky top-0 p-3 text-lg font-bold bg-amber-500">Basic Profile</h3>
            <label>First Name:</label>
            <input type="text" placeholder="Enter first name" className="block w-full p-2 mb-2 border rounded-md" />
            <label>Last Name:</label>
            <input type="text" placeholder="Enter last name" className="block w-full p-2 mb-2 border rounded-md" />
            <label>First Name:</label>
            <input type="text" placeholder="Enter first name" className="block w-full p-2 mb-2 border rounded-md" />
            <label>Last Name:</label>
            <input type="text" placeholder="Enter last name" className="block w-full p-2 mb-2 border rounded-md" /> <label>First Name:</label>
            <input type="text" placeholder="Enter first name" className="block w-full p-2 mb-2 border rounded-md" />
            <label>Last Name:</label>
            <input type="text" placeholder="Enter last name" className="block w-full p-2 mb-2 border rounded-md" /> <label>First Name:</label>
            <input type="text" placeholder="Enter first name" className="block w-full p-2 mb-2 border rounded-md" />
            <label>Last Name:</label>
            <input type="text" placeholder="Enter last name" className="block w-full p-2 mb-2 border rounded-md" /> <label>First Name:</label>
            <input type="text" placeholder="Enter first name" className="block w-full p-2 mb-2 border rounded-md" />
            <label>Last Name:</label>
            <input type="text" placeholder="Enter last name" className="block w-full p-2 mb-2 border rounded-md" /> <label>First Name:</label>
            <input type="text" placeholder="Enter first name" className="block w-full p-2 mb-2 border rounded-md" />
            <label>Last Name:</label>
            <input type="text" placeholder="Enter last name" className="block w-full p-2 mb-2 border rounded-md" /> <label>First Name:</label>
            <input type="text" placeholder="Enter first name" className="block w-full p-2 mb-2 border rounded-md" />
            <label>Last Name:</label>
            <input type="text" placeholder="Enter last name" className="block w-full p-2 mb-2 border rounded-md" /> <label>First Name:</label>
            <input type="text" placeholder="Enter first name" className="block w-full p-2 mb-2 border rounded-md" />
            <label>Last Name:</label>
            <input type="text" placeholder="Enter last name" className="block w-full p-2 mb-2 border rounded-md" /> <label>First Name:</label>
            <input type="text" placeholder="Enter first name" className="block w-full p-2 mb-2 border rounded-md" />
            <label>Last Name:</label>
            <input type="text" placeholder="Enter last name" className="block w-full p-2 mb-2 border rounded-md" /> <label>First Name:</label>
            <input type="text" placeholder="Enter first name" className="block w-full p-2 mb-2 border rounded-md" />
            <label>Last Name:</label>
            <input type="text" placeholder="Enter last name" className="block w-full p-2 mb-2 border rounded-md" /> <label>First Name:</label>
            <input type="text" placeholder="Enter first name" className="block w-full p-2 mb-2 border rounded-md" />
            <label>Last Name:</label>
            <input type="text" placeholder="Enter last name" className="block w-full p-2 mb-2 border rounded-md" />
            <div className='text-end'>
            <button className='px-5 py-2 ml-3 hover:bg-blue-800 rounded-3xl hover:text-white'>Cancel</button>
            <button className='px-5 py-2 ml-3 text-white bg-blue-800 rounded-3xl'>Next</button>
            </div>
           
          </form>
        );
        case "Educational":
          return (
            <form className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="sticky top-0 p-3 text-lg font-bold bg-amber-500">Educational Profile</h3>
            <label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" /><label>Highest Qualification:</label>
            <input type="text" placeholder="Enter qualification" className="block w-full p-2 mb-2 border rounded-md" />
            <div className='text-end'>
            <button className='px-5 py-2 ml-3 hover:bg-blue-800 rounded-3xl hover:text-white'>Cancel</button>
            <button className='px-5 py-2 ml-3 text-white bg-blue-800 rounded-3xl'>Next</button>
            </div>
          </form>
          );
          case "Financial":
            return (
              <form className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="sticky top-0 p-3 text-lg font-bold bg-amber-500">Financial Profile</h3>
                <label>Annual Income:</label>
                <input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" />
                <div className='text-end'>
            <button className='px-5 py-2 ml-3 hover:bg-blue-800 rounded-3xl hover:text-white'>Cancel</button>
            <button className='px-5 py-2 ml-3 text-white bg-blue-800 rounded-3xl'>Next</button>
            </div>
              </form>
            );
          case "Lifestyle & Entertainment":
            return (
              <form className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="sticky top-0 p-3 text-lg font-bold bg-amber-500">Lifestyle & Entertainment</h3>
              <label>Annual Income:</label>
              <input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" /><input type="number" placeholder="Enter annual income" className="block w-full p-2 mb-2 border rounded-md" />
              <div className='text-end'>
          <button className='px-5 py-2 ml-3 hover:bg-blue-800 rounded-3xl hover:text-white'>Cancel</button>
          <button className='px-5 py-2 ml-3 text-white bg-blue-800 rounded-3xl'>Next</button>
          </div>
            </form>
            );
          case "Shopping":
            return (
              <form className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-bold">Shopping Preferences</h3>
            
              </form>
            );
          default:
            return null;
        }
  }

  return (
    <>
    <div className='w-[80%] mx-auto'>
      <Slider {...settings}>
        {slideData.map((data, index) => (
          <div key={index} onClick={()=>setActiveSlides(data?.name)} className={`m-0 cursor-pointer `}>
            <div className={`flex gap-2 p-2 m-4 rounded-2xl ${activeSlides == data.name ? 'bg-blue-800 text-white':'bg-cyan-200'}`}>
            <div className={``}>{data?.image}</div>
            <div className='flex flex-col w-full gap-3'>
               <div>{data?.name}</div>
               <div className='border-4 border-amber-400 rounded-3xl'></div>
            </div>
            </div>
            
          </div>
        ))}
      </Slider>
    </div>

<div className='mt-5 w-[80%] mx-auto'>
  {renderSlide()}
</div>

    </>
    
  );
};

export default ProfileSlide;
