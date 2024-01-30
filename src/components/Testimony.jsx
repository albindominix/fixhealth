import React from "react";

function Testimony({person}) {
  return (
    <div
      className="relative flex flex-col bg-[#203e4a] shadow p-4 rounded-2xl max-w-[100vw]"
      data-nc-id="ProductCard"
    >
      <div className="relative flex-shrink-0 bg-slate-50 rounded-3xl overflow-hidden z-1 group">
        {/* <Link className="block" to={`/singleproduct/${productDetail?.id}`}> */}
          <div className=" flex justify-center aspect-w-11 aspect-h-12 w-full h-auto">
            <div className="relative scale-[1.1] flex justify-center h-60 overflow-hidden rounded-xl">
              <img
                className="object-cover tex "
                src={person.image}
                alt="product image"
              />
            </div>
          </div>
        {/* </Link> */}
       
      </div>
      <div className=" pl-2.5 pt-5 pb-2.5 space-y-4">
        <div className="flex flex-col gap-3">
            <div>
            <h2
            className="text-2xl font-semibold text-white line-clamp-1"
  
          >
          {person.name}
          </h2>
          <p className=" text-lg tracking-tight  font-sans text-teal-500">{person.profession}</p>
            </div>
        
          <p className=" font-normal text-slate-500 mt-1 ">
         {person.testimony}
          </p>
        </div>
      
      </div>
    </div>
  );
}

export default Testimony;
