"use client";

import React from "react";
import { useCategory } from "@/hooks/useCategory";
import CategoryCard from "@/components/cards/CategoryCard";
import LottoLoader from "../loader/LottoLoader";
import LottonownoButton from "../buttons/LottonownoButton";

function SelectGameCategory() {
  const { data: categories, isLoading } = useCategory();

  return (
    <section>
      <div>
        <h2>Create Game from Default Category</h2>
        <p className="text-sm mt-5 font-normal  text-primary-100">
          Select{" "}
          <span className="text-primary-200 font-extrabold">one (1) </span>from
          the 11 existing game categories
        </p>
      </div>

      <div>
        {isLoading && <LottoLoader />}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-10">
          {categories &&
            categories.map((category: any, index: number) => (
              <div key={index}>
                <CategoryCard
                  name={category.name}
                  image={category.imageUrl}
                  games={"4 Games"}
                  showCheckbox={true}
                />
              </div>
            ))}
        </div>
      </div>

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
    </section>
  );
}

export default SelectGameCategory;
