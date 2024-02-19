"use client";
import React, { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../styles";

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name!"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const SignUp: FC<Props> = ({ setRoute }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const visible = {
    display: passwordVisible ? "block" : "none",
  };
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      setRoute("Verification");
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <div className="w-full fade-in">
      <h1 className={`${styles.title}`}>Join Learniverse Today</h1>
      <form onSubmit={handleSubmit}>
        <div className="w-full mb-3">
          <label htmlFor="email" className={`${styles.label}`}>
            Full name
          </label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            id="name"
            placeholder="Enter your full name"
            className={`${errors.name && touched.name && "border-red-500"} ${
              styles.input
            }`}
          />
          {errors.name && touched.name && (
            <span className="text-red-500 pt-2 block">{errors.name}</span>
          )}
        </div>
        <div className="w-full mb-3">
          <label htmlFor="email" className={`${styles.label}`}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="Enter your email"
            className={`${errors.email && touched.email && "border-red-500"} ${
              styles.input
            }`}
          />
          {errors.email && touched.email && (
            <span className="text-red-500 pt-2 block">{errors.email}</span>
          )}
        </div>
        <div className="w-full mb-3 relative">
          <label htmlFor="password" className={`${styles.label}`}>
            Password
          </label>
          <input
            type={!passwordVisible ? "password" : "text"}
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="Enter you password"
            className={`${
              errors.password && touched.password && "border-red-500"
            }  ${styles.input}`}
          />
          {!passwordVisible ? (
            <AiOutlineEyeInvisible
              style={visible}
              className="absolute bottom-[10px] right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setPasswordVisible(true)}
            />
          ) : (
            <AiOutlineEye
              style={visible}
              className="absolute bottom-[10px] right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setPasswordVisible(false)}
            />
          )}
          {errors.password && touched.password && (
            <span className="text-red-500 pt-2 block">{errors.password}</span>
          )}
        </div>
        <div className="w-full mt-5">
          <input type="submit" value="Login" className={`${styles.button}`} />
        </div>
        <br />
        <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
          Or join with
        </h5>
        <div className="flex items-center justify-center my-3">
          <FcGoogle
            size={30}
            className="cursor-pointer mr-2 text-black dark:text-white"
          />
          <AiFillGithub
            size={30}
            className="cursor-pointer ml-2 text-black dark:text-white"
          />
        </div>
        <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
          Already have an account?
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setRoute("Sign Up")}
          >
            Login
          </span>
        </h5>
        <br />
      </form>
    </div>
  );
};

export default SignUp;
