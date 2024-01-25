import { useEffect, useState } from "react";
import arrowleft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
import Testimony from "../components/Testimony";
// import '../App.css'
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalComponent from "../components/ModalComponent";
import person1 from '../assets/person1.avif'
import person2 from '../assets/person2.avif'
import person3 from '../assets/person4.webp'
import person4 from '../assets/person3.jpg'
import person5 from '../assets/person5.jpg'


function Home() {

  useEffect(() => { 
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const SlideArrowLeft = () => {
    return (
      <div className="bg-white w-9 h-9">
        <img src={arrowleft} />
      </div>
    );
  };
  const SlideArrowRight = () => {
    return (
      <div className="bg-white w-9 h-9">
        <img src={arrowRight} />
      </div>
    );
  };

  
  const SliderArrow = ({ onClick, type, classname }) => {
    return (
      <div
        className={` rounded-full overflow-hidden  cursor-pointer bottom-[-14%] md:bottom-[-10%] ${classname}`}
        style={{
          color: "white",
          position:'absolute',
          // bottom: "-10% ",
          left: "unset !important",
          right: type === "prev" ? "70px" : "10px ",
          zIndex: 10,
          boxShadow: 1,
        }}
        onClick={onClick}
      >
        {type === "next" ? <SlideArrowRight /> : <SlideArrowLeft />}
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 3,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom:'-34px',

          paddingLeft: "8px",
          textAlign: "left",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>),
       customPaging: () => (
        <div className="bg-teal-600" style={{ height: 8, width: 30,  display: 'inline-block', borderRadius: '10px' }} />
      ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className={`heroSection flex flex-col gap-7 items-center justify-center mb-14   h-screen v-full
         `}
      >
        <h1 className="font-sans tracking-tight font-medium md:text-[4rem] text-white text-[2.5rem]  leading-snug text-center ">
          Providing Professional and <br />
          Caring<span className="text-blue-500"> Health Services</span>
        </h1>
        <p className="isolate max-w-3xl text-center md:text-xl tracking-tight text-sm  font-sans text-teal-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          obcaecati dolores vero cum aliquid sint molestias at laborum facilis
          suscipit laboriosam! Aliquam mollitia neque alias.
        </p>
        <div className="flex gap-4 isolate">
         <ModalComponent/>
          <button className="text-md border text-teal-500 border-blue-600 rounded-md py-3 px-4 hover:bg-blue-700 hover:text-white ">
            Download Apps
          </button>
        </div>
      </div>

      <div className="flex flex-col  items-center w-full h-[120vh] bg-gray-800">
        <div className="max-w-[1100px] flex flex-col gap-4 h-screen  ">
          <h1 className="font-sans tracking-tight font-medium text-white sm:text-[2rem] text-[1.5rem]  leading-snug text-center my-5 md:text-left px-5">
            Our Customer Testimonies{" "}
          </h1>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  px-5 md:px-0"> */}
          <Slider {...settings}>
            <Testimony image={person1} />
            <Testimony image={person2} />
            <Testimony image={person3} />
            <Testimony image={person4} />
            <Testimony image={person5} />
            
          </Slider>
          {/* </div> */}
        </div>

        <div></div>
      </div>
    </>
  );
}

export default Home;
