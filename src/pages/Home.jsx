import { useEffect, useState } from "react";
import arrowleft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
import Testimony from "../components/Testimony";
// import '../App.css'
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalComponent from "../components/ModalComponent";
import person1 from "../assets/person1.avif";
import person2 from "../assets/person2.avif";
import person3 from "../assets/person4.webp";
import person4 from "../assets/person3.jpg";
import person5 from "../assets/person5.jpg";
const testimonials = [
  {
    name: "Raj T",
    image: person1,
    profession: "Office Manager",
    testimony:
      "I had become frightened of falling as I struggled with age-related balance issues. Over several months of balance training with Dr. Asha's expertise and encouragement, my stability has measurably improved, granting me the confidence to resume activities like short neighborhood walks independently",
  },
  {
    name: "Abhijith",
    profession: "Software Engineer",
    image: person2,
    testimony:
          "As I aged, my balance issues made me nervous to walk far or be home alone. After a few months working on balance exercises with my physio Dr. Asha, I feel much steadier on my feet. I've regained the confidence to take short walks through my neighborhood regularly without any worries or falls.",
 },
  {
    name: "Anjali S",
    profession: "Teacher",
    image: person3,
    testimony:
      "I was afraid I'd never regain full wrist movement after a bad fracture. Under the excellent care of physiotherapist Rohan and his team, they made my recovery smooth and successful. They treated me with expertise and precision and ensured I could meet my goals to return to playing sports pain-free.",
  },
  {
    name: "Suraj",
    profession: "Retiree",
    image: person4,
    testimony:
      "As I aged, my balance issues made me nervous to walk far or be home alone. After a few months working on balance exercises with with my physio Dr. Asha, I feel much steadier on my feet. I've regained the confidence to take short walks through my neighborhood regularly without any worries or falls.",
  },
  {
    name: "Deepika",
    profession: "Accountant",
    image: person5,
    testimony:
      "After struggling with lower back pain for months that severely limited my mobility, I began seeing Dr. Amit for physiotherapy. He carefully listened and designed a personalized treatment plan. After several weeks of stretches, exercises, and guidance on proper movement, I'm walking upright again .",
  },
];

function Home() {
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
          position: "absolute",
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
          bottom: "-34px",

          paddingLeft: "8px",
          textAlign: "left",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        className="bg-teal-600"
        style={{
          height: 8,
          width: 30,
          display: "inline-block",
          borderRadius: "10px",
        }}
      />
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
          Restoring mobility, relieving pain, rebuilding strength and function
          to help patients live fuller, healthier lives through
          compassionate, and personalized physiotherapy care and treatment.
        </p>
        <div className="flex gap-4 isolate">
          <ModalComponent />
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
            {testimonials.map((person, index) => (
              <Testimony key={index} person={person} />
            ))}
          </Slider>
          {/* </div> */}
        </div>

        <div></div>
      </div>
    </>
  );
}

export default Home;
