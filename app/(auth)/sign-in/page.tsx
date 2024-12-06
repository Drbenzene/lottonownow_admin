"use client";

import { useSignIn } from "@/hooks/useSignIn";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LottonownoWInputField from "@/components/inputs/LottoInputField";
import { Formik } from "formik";
import * as Yup from "yup";
import { signIn } from "@/hooks/useSignIn";
import { useRouter } from "next/navigation";
import LottonownoButton from "@/components/buttons/LottonownoButton";

const Page = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const { push } = useRouter();
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await signIn(values);
          setSubmitting(false);
        }}
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-2">
              <LottonownoWInputField
                label="Email Address"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                error={errors.email}
                placeholder="Enter Email Address"
              />

              <LottonownoWInputField
                label="Enter Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                error={errors.password}
                placeholder="Enter Password"
              />

              <LottonownoButton
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                title={""}
              />
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Page;
