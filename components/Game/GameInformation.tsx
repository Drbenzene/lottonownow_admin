import React from "react";
import { useCategory } from "@/hooks/useCategory";
import CategoryCard from "@/components/cards/CategoryCard";
import LottoLoader from "../loader/LottoLoader";
import LottonownoButton from "../buttons/LottonownoButton";
import LottonownoWInputField from "../inputs/LottoInputField";
import LottoNowNowCurrencyField from "../inputs/LottoNowNowCurrencyField";

interface IGameInfoProps {
  values: any;
  errors: any;
  touched: any;
  setValues: any;
  handleChange: any;
  handleBlur: any;
}
function GameInformation({
  values,
  errors,
  touched,
  setValues,
  handleChange,
  handleBlur,
}: IGameInfoProps) {
  const { data: categories, isLoading } = useCategory();

  return (
    <section>
      <div>
        <p className="text-lg font-semibold text-primary-100">
          Game Information
        </p>
        <p className="text-sm mt-5 font-normal  text-primary-100">
          Enter the following required fields to create a game
        </p>
      </div>

      <div>
        <div>
          <p className="font-bold">Set Timer</p>
          <p className="text-[#667085] text-sm">
            Specify the time for the draw in the DD HH MM SS format
          </p>
        </div>
      </div>
    </section>
  );
}

export default GameInformation;
