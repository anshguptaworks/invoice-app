import { getIcons } from "@/src/assets";
import { IconsType } from "@/src/assets/types";
import Button from "@/src/components/button/Button";
import { ButtonVariant } from "@/src/components/button/button.types";
import Input from "@/src/components/input";
import { Variant } from "@/src/components/typography";
import Typography from "@/src/components/typography/Typography";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const CreateInvoiceForm = (): JSX.Element => {
  interface IForm {
    name: string;
    city: string;
    postCode: string;
    country: string;
    clientName: string;
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);

  console.log(watch("name"));
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-start items-start flex-col gap-6 w-full">
          <Typography
            size={Variant.Body1}
            fontWeight="bold"
            className="text-primary"
          >
            Bill From
          </Typography>
          <Input {...register("name", { required: true })} title="Name" />

          <div className="flex justify-center items-center gap-6">
            <Input {...register("city", { required: true })} title="City" />
            <Input
              {...register("postCode", { required: true })}
              title="Post Code"
            />
            <Input
              {...register("country", { required: true })}
              title="Country"
            />
          </div>

          <Typography
            size={Variant.Body1}
            fontWeight="bold"
            className="text-primary mb-6"
          >
            Bill To
          </Typography>
          <Input
            {...register("clientName", { required: true })}
            title="Client’s Name"
          />
          <Input
            {...register("clientName", { required: true })}
            title="Client’s Email"
            placeholder="e.g. email@example.com"
          />
          <Input title="Street Address" />
          <div className="flex justify-center items-center gap-6 mt-6">
            <Input title="City" />
            <Input title="Post Code" />
            <Input title="Country" />
          </div>
          <div className="flex justify-center items-center gap-6 w-full">
            <Input type="date" title="Invoice Date" />
            <Input icon={IconsType.arrow} title="Payment Terms" />
          </div>
          <Input
            placeholder="e.g. Graphic Design Service"
            title="Project Description"
          />
          <div className="text-[1.125rem] font-bold text-grey400">
            Item List
          </div>
          <Input title="Item Name" />
          <div className="flex justify-center items-center gap-6 mt-6">
            <Input title="Qty." />
            <Input title="Price" />
            <Input
              disabled
              value="1"
              inputClassName="border-none cursor-not-allowed "
              classname="cursor-not-allowed bg-transparent"
              title="Total"
            />
            <button className="pt-4">{getIcons(IconsType.delete)}</button>
          </div>
          <Button
            buttonType="submit"
            variant={ButtonVariant.Secondary}
            isFullWidth
            className="text-black bg-grey500"
          >
            + Add New Item
          </Button>
        </div>
        {errors && <span>This field is required</span>}
      </form>
    </>
  );
};

export default CreateInvoiceForm;
