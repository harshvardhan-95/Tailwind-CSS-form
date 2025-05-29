import "./App.css";
import { useForm, Controller } from "react-hook-form";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Form() {
  const [value, setValue] = useState();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [focused1, setFocused1] = useState(false);
  const [focused2, setFocused2] = useState(false);
  const [focused3, setFocused3] = useState(false);

  function handleFocus1() {
    setFocused1(true);
  }

  function handleBlur1() {
    setFocused1(false);
  }

  function handleFocus2() {
    setFocused2(true);
  }

  function handleBlur2() {
    setFocused2(false);
  }

  function handleFocus3() {
    setFocused3(true);
  }

  function handleBlur3() {
    setFocused3(false);
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="py-8 px-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="pb-7 px-4">
        <Controller
      
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <div>
              <div className="relative ">
                <input
                  type="text"
                  {...field}
                  id="filled_success"
                  aria-describedby="filled_success_help"
                  className="block rounded-t-lg px-2.0 pb-2.5 pt-5 w-full text-sm text-gray-900   border-0 border-b-2 border-blackcol focus:border-themecolor appearance-none  focus:outline-none focus:ring-0  peer"
                  placeholder={` ${focused1 ? "Enter Your Name" : ""}`}
                  onFocus={handleFocus1}
                  onBlur={handleBlur1}
                />
                {errors.name && (
                  <p className="text-red-700  text-sm">Name is required</p>
                )}
                <label
                  for="filled_success"
                  className=" absolute text-lg peer-focus:text-themecolor  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Name
                </label>
              </div>
            </div>
          )}
        />
      </div>

      <div className="pb-7 px-4">
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <div className="relative">
              <PhoneInput
                {...field}
                defaultCountry="IN"
                className=" block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900   border-0 border-b-2 border-blackcol focus:border-themecolor appearance-none  focus:outline-none focus:ring-0  peer"
                classNames={{
                  container: "phone-input-container",
                  input: "phone-input",
                }}
                placeholder={`${focused2 ? "Enter Your whatsapp no" : ""}`}
                onFocus={handleFocus2}
                onBlur={handleBlur2}
              />

              <label
                htmlFor="phone"
                className="absolute text-lg peer-focus:text-themecolor duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Phone Number
              </label>
            </div>
          )}
        />
      </div>

      <div className="pb-7 px-4">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <div>
              <div className="relative ">
                <input
                  type="email"
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  {...field}
                  id="filled_success"
                  aria-describedby="filled_success_help"
                  className="block rounded-t-lg px-2.0 pb-2.5 pt-5 w-full text-sm text-gray-900   border-0 border-b-2 border-blackcol appearance-none  focus:outline-none focus:ring-0 focus:border-themecolor peer"
                  placeholder={` ${focused3 ? "Enter your Email id" : ""}`}
                  onFocus={handleFocus3}
                  onBlur={handleBlur3}
                />
                {errors.email && (
                  <p className="text-red-700 text-sm">Email is required</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="text-red-700 text-sm">Invalid email format</p>
                )}
                <label
                  for="filled_success"
                  className="absolute text-lg peer-focus:text-themecolor  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Email
                </label>
              </div>
            </div>
          )}
        />
      </div>
      <div className="pt-6 flex justify-center">
        <button
          className="bg-themecolor  text-white font-bold py-2 px-2 rounded  "
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

function App() {
  return (
    <div className="bg-gradient-to-b from-primary to-secondary min-h-screen  flex items-center">
      <div className=" mx-auto my-auto bg- bg-white w-[440px] h-[605px]  rounded-xl ">
        <div className=" pb-2 pl-9 pt-5">
          <h1 className="text-3xl  font-medium">The 5 AM Challenge</h1>
          <p className="text-themecolor font-medium">1 - 21 April * Online</p>
        </div>
        {/* <h1>Name</h1>
        <textarea>Your full name</textarea> */}
        <Form  />
      </div>
    </div>
  );
}

export default App;
