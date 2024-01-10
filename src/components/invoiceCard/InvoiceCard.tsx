import React from "react";
import Typography, { Variant } from "../typography";
import Tag from "../tag";

const InvoiceCard = (): JSX.Element => {
  return (
    <div className="p-6 w-full rounded-lg bg-white hover:border-primary hover:border-solid hover:border-2 hover:ease-linear hover:duration-100 ease-linear">
      <div className="flex justify-between items-center">
        <Typography size={Variant.Body1} fontWeight="bold">
          <span className="text-grey300">#</span>
          RT3080
        </Typography>
        <Typography
          className="text-grey600"
          size={Variant.Body1}
          fontWeight="medium"
        >
          Jensen Huang
        </Typography>
      </div>
      <div className="flex justify-between item-center  pt-6">
        <div>
          <Typography
            className="text-grey600"
            size={Variant.Body1}
            fontWeight="medium"
          >
            Jensen Huang
          </Typography>
          <Typography size={Variant.H3} fontWeight="bold" className="pt-2">
            £ 1,800.90
          </Typography>
        </div>
        <Tag type="pending" />
      </div>
    </div>
  );
};

export default InvoiceCard;
