"use client";

import React, { useState } from "react";
import LottonownoButton from "@/components/buttons/LottonownoButton";
import CategoryCard from "@/components/cards/CategoryCard";
import AddEditCategory from "@/components/modals/AddEditCategory";
import { useCategory } from "@/hooks/useCategory";
import LottoLoader from "@/components/loader/LottoLoader";

function DrawCategory() {
  const { data: categories, isLoading } = useCategory();
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  return (
    <section>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-primary-100">
            Game Categories
          </h2>
        </div>
        <LottonownoButton
          title="Add Game"
          onClick={function (): void {
            setSelectedCategory(null);
            setOpen(true);
          }}
        />
      </div>

      {isLoading && <LottoLoader />}

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {categories &&
          categories?.map((category: any, index: number) => (
            <div
              onClick={() => {
                setSelectedCategory(category);
                setOpen(true);
              }}
              key={index}
            >
              <CategoryCard
                name={category?.name}
                image={category?.imageUrl}
                games={"4 Games"}
              />
            </div>
          ))}
      </div>

      {open && (
        <AddEditCategory
          selectedCategory={selectedCategory}
          open={open}
          setOpen={setOpen}
        />
      )}
    </section>
  );
}

export default DrawCategory;
