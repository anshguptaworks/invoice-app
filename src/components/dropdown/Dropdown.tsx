import { getIcons } from "@/src/assets";
import { IconsType } from "@/src/assets/types";
import React, { useState, useEffect } from "react";
import Typography from "../typography/Typography";
import { Variant } from "../typography";

export type CheckboxKey = "draft" | "pending" | "paid";

interface dropdownProps {
  checkboxkey?: CheckboxKey;
  key?: string;
}

const Dropdown = ({ checkboxkey }: dropdownProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const [isChecked, setIsChecked] = useState<Record<CheckboxKey, boolean>>({
    draft: false,
    pending: false,
    paid: false,
  });

  useEffect(() => {
    if (checkboxkey) {
      setIsChecked({
        draft: false,
        pending: false,
        paid: false,
        [checkboxkey]: true,
      });
    }
  }, [checkboxkey]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleCheckbox = (key: CheckboxKey) => {
    setIsChecked((prevState) => ({
      draft: false,
      pending: false,
      paid: false,
      [key]: !prevState[key],
    }));
  };

  const checkboxConfig: { label: string; key: CheckboxKey }[] = [
    { label: "Draft", key: "draft" },
    { label: "Pending", key: "pending" },
    { label: "Paid", key: "paid" },
  ];

  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <button
        className="text-dark300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center duration-200 ease-in-out"
        onClick={toggleDropdown}
      >
        <span className="max-md:hidden">Filter by status</span>
        <span className="md:hidden">Filter</span>

        <span
          className={`transform transition-transform duration-200 ease-in-out md:px-4 px-3 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {getIcons(IconsType.arrow)}
        </span>
      </button>

      {isOpen && (
        <div
          style={{
            boxShadow: "0px 10px 20px 0px rgba(72, 84, 159, 0.25);",
          }}
          className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg absolute top-20"
        >
          <ul
            className="p-3 space-y-4 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownCheckboxButton"
          >
            {checkboxConfig.map(({ label, key }) => (
              <li key={key}>
                <div className="flex items-center">
                  <input
                    id={`checkbox-item-${key}`}
                    type="checkbox"
                    checked={isChecked[key]}
                    onChange={() => toggleCheckbox(key)}
                    className="w-4 h-4 accent-primary hover:accent-secondary text-primary duration-150 ease-linear bg-grey100 border-grey100 rounded"
                  />
                  <Typography
                    size={Variant.Body2}
                    fontWeight="bold"
                    htmlFor={`checkbox-item-${key}`}
                    className="text-black pl-3"
                  >
                    {label}
                  </Typography>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
