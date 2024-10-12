import React, { useState } from "react";
import CustomField from "./CustomField";
import { Form, Formik } from "formik";
import { registerSchema } from "../../validation/RegisterSchema";
import { actRegister, actLogin } from "../../store/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col gap-4 justify-center items-center h-[75vh]">
      <h2 className="mb-16">{type === "login" ? "SignIn" : "SignUp"}</h2>
      {type === "register" && (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmpassword: "",
          }}
          validationSchema={registerSchema}
          onSubmit={async (values, actions) => {
            try {
              await dispatch(actRegister(values)).unwrap();
              navigate("/login");
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {(props) => (
            <Form className="w-full lg:w-[40%] flex flex-col gap-8 ">
              <CustomField
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <CustomField
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
              <CustomField name="email" type="email" placeholder="Email" />
              <CustomField
                name="password"
                type="password"
                placeholder="Password"
              />
              <CustomField
                name="confirmpassword"
                type="password"
                placeholder="Confirm Password"
              />
              <button
                type="submit"
                className="bg-red-800 py-3 w-full self-center rounded-lg text-slate-50 font-bold"
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      )}

      {type === "login" && (
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values, actions) => {
            try {
              await dispatch(actLogin(values)).unwrap();
              navigate("/");
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {(props) => (
            <Form className="w-full lg:w-[40%] flex flex-col gap-8 ">
              <CustomField name="email" type="email" placeholder="Email" />
              <CustomField
                name="password"
                type="password"
                placeholder="Password"
              />
              <button
              type="submit"
              className="bg-red-800 py-3 w-full self-center rounded-lg text-slate-50 font-bold"
            >
              Sign In
            </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default AuthForm;
