import React from "react";

type ButtonProps = {
  onClick: () => void;
  title: string;
  bgColor?: string;
  textColor?: string;
  disabled?: boolean;
  processing?: boolean;
};
function LottonownoButton({
  onClick,
  title,
  bgColor,
  textColor,
  disabled,
  processing,
}: ButtonProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`bg-${
          bgColor || "primary"
        } text-nowrap rounded-md disabled:bg-gray-400 px-10 py-5 text-${
          textColor || "white"
        } font-semibold w-full border`}
      >
        {processing ? "PLEASE WAIT..." : title}
      </button>
    </div>
  );
}

export default LottonownoButton;
