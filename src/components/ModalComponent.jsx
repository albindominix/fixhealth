import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import { useSnackbar } from "notistack";
export default function ModalComponent() {
  const [showModal, setShowModal] = useState(false);
  const [formStepValue, setFormStepValue] = useState(1);
  const [doctors, setDoctors] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm();

  const onSubmit = (data) => {
    setShowModal(false);
    const name = data.doctor
    console.log(data);
    setFormStepValue(1);
    reset();
    enqueueSnackbar(`Congratulations, your appointment with ${name} has been booked`)

  };

  const watchAge = watch("age", false);
  const watchCity = watch("city", "");

  useEffect(() => {
    fetch("https://mocki.io/v1/a56fec66-1cc8-46a1-b84b-0e76eb481b05")
      .then((res) => res.json())
      .then((data) => {
        const result = data.doctors.filter((value) =>
          value.city.toLowerCase().includes(watchCity.toLowerCase())
        );
        setDoctors(result);
      })
      .catch((err) => console.log(err));
  }, [watchCity]);

  useEffect(() => {// used so that on opeing modal the window wont be scrollable
    const body = document.querySelector("body");
    body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);
  return (
    <>
      <button
        className="text-md bg-blue-700   py-3 px-4 text-white rounded-md"
        type="button"
        onClick={() => {
          setShowModal(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Book Your Appointment
      </button>
      {showModal ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative max-w-2xl my-6 mx-auto ">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start md:w-[30rem] justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Book Your Doctor</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="text-center mt-5">
                    Step {formStepValue} of 3
                  </div>
                  <div className="relative p-6 flex-auto">
                    {formStepValue == 1 && (
                      <FormStep1 register={register} errors={errors} />
                    )}

                    {formStepValue == 2 && (
                      <FormStep2 register={register} errors={errors} />
                    )}

                    {formStepValue == 3 && (
                      <FormStep3
                        register={register}
                        errors={errors}
                        watchAge={watchAge}
                        doctors={doctors}
                      />
                    )}
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    {formStepValue == 1 ? (
                      <button
                        className="text-red-600-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setShowModal(false);
                          reset();
                          // setFile(null);
                        }}
                      >
                        Close
                      </button>
                    ) : (
                      <button
                        className="text-red-600-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          {
                            setFormStepValue((prev) => prev - 1);
                            setFormStepValue;
                          }
                        }}
                      >
                        Prev
                      </button>
                    )}
                    {formStepValue == 3 ? (
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        disabled={isSubmitting}
                        //   onClick={() => setShowModal(false)}
                      >
                        Save Changes
                      </button>
                    ) : (
                      <button
                        className={`bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${
                          !isValid ? "bg-emerald-100" : ""
                        }`}
                        type="button"
                        disabled={!isValid}
                        onClick={() => {
                          setFormStepValue((prev) => formStepValue + 1);
                        }}
                      >
                        Next
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
