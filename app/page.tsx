"use client";

import { Formik } from "formik";
import { useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";
import * as Yup from "yup";
import LottonownoWInputField from "@/components/inputs/LottoInputField";
import LottonownoButton from "@/components/buttons/LottonownoButton";
import authServices from "@/services/actions/auth";

export default function HomePage() {
  const router = useRouter();

  const loginHandler = async (values: any) => {
    const res = await authServices.loginAdmin(values);
    if (res) {
      localStorage.setItem("accessToken", res.data?.accessToken);
      toast.success(`Welcome back ${res?.data?.admin?.firstName}`);
      const lastPageVisited = sessionStorage.getItem("redirect_path");
      if (lastPageVisited) {
        router.replace(`${lastPageVisited}`);
      } else {
        router.replace("/overview");
      }
    }
  };

  return (
    <>
      {/* <Seo templateTitle="Home" /> */}
      <main>
        <section className="h-screen w-screen bg-white">
          <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <img
                className="mx-auto h-20 w-auto"
                src="/images/logo.svg"
                alt="Lottonownow Logo"
              />
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
              <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .required("Email is required")
                      .email("Invalid email address"),
                    password: Yup.string()
                      .required("Password is required")
                      .min(5, "Invalid Password"),
                  })}
                  onSubmit={async (values, { setSubmitting }) => {
                    await loginHandler(values);
                    setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    errors,
                    isValid,
                  }) => (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <LottonownoWInputField
                        label="Email Address"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                        type="email"
                        autoComplete="email"
                        error={errors.email}
                      />

                      <LottonownoWInputField
                        label="Password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        onBlur={handleBlur}
                        type="password"
                        autoComplete="password"
                        error={errors.password}
                      />

                      <div>
                        <LottonownoButton
                          disabled={isSubmitting || !isValid}
                          onClick={handleSubmit}
                          processing={isSubmitting}
                          title={"LOGIN"}
                        />
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>

            <p className="text-pink text-xs my-10 flex  items-center justify-center text-center">
              © {new Date().getFullYear()} All right reserved, LottoNowNow v1.0.
              Sage Grey Technologies Limited
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
