"use client";

import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import LottonownoButton from "@/components/buttons/LottonownoButton";
import GameInformation from "@/components/Game/GameInformation";
import SelectGameCategory from "@/components/Game/SelectGameCategory";

interface FormValues {
  name: string;
  timer: string;
  noOfStakes: string;
  minimumStakeAmount: string;
  numberOfWinners: string;
  [key: `winner${number}Amount`]: number; // Allow dynamic fields
}

function CreateGame() {
  const steps = [
    {
      id: 1,
      title: "Game Category",
      description: "Select from category",
    },
    {
      id: 2,
      title: "Game Information Input",
      description: "Fill the following required fields",
    },
    {
      id: 3,
      title: "Add Game Rules",
      description: "Fill in the rules of the game",
    },
    {
      id: 4,
      title: "Add Game Prizes",
      description: "Fill in the prizes of the game",
    },
    {
      id: 5,
      title: "Add Game Winners",
      description: "Fill in the winners of the game",
    },
  ];
  return (
    <section>
      <section className="my-10">
        <Formik<FormValues>
          initialValues={{
            name: "",
            timer: "",
            noOfStakes: "",
            minimumStakeAmount: "",
            numberOfWinners: "",
            winner1Amount: 0,
            winner2Amount: 0,
            winner3Amount: 0,
            winner4Amount: 0,
            winner5Amount: 0,
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            timer: Yup.string().required("Game Timer Is required"),
            noOfStakes: Yup.number()
              .required("Number of Stakes is required")
              .min(3),
            minimumStakeAmount: Yup.number().required(
              "Stake Amount is required"
            ),
            numberOfWinners: Yup.number()
              .required("Required")
              .min(1, "At least one winner is required"),
          })}
          onSubmit={() => {}}
        >
          {({
            values,
            handleChange,
            errors,
            setValues,
            handleBlur,
            handleSubmit,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <SelectGameCategory />
              {/* <GameInformation
                values={values}
                errors={errors}
                touched={touched}
                setValues={setValues}
                handleChange={handleChange}
                handleBlur={handleBlur}
              /> */}

              <div className=" flex justify-start space-x-5 w-full bg-white h-32 pl-5 md:pl-10  items-center my-20 ">
                <LottonownoButton
                  title="Cancel"
                  bgColor="bg-[#F6F6F7]"
                  textColor="text-[#BFBFC0]"
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />

                <LottonownoButton
                  title="Continue"
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
            </form>
          )}
        </Formik>
      </section>
    </section>
  );
}

export default CreateGame;
