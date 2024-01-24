import { getIcons } from '@/src/assets'
import { IconsType } from '@/src/assets/types'
import Button from '@/src/components/button/Button'
import { ButtonVariant } from '@/src/components/button/button.types'
import Input from '@/src/components/input'
import { Variant } from '@/src/components/typography'
import Typography from '@/src/components/typography/Typography'
import FormInput from '@/src/organisms/formInput/FormInput'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

const CreateInvoiceForm = (): JSX.Element => {
  interface IForm {
    name: string
    city: string
    postCode: string
    country: string
    clientName: string
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IForm>()
  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data)

  console.log(watch('name'))
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-start items-start flex-col gap-6 w-full">
          <Typography size={Variant.Body1} fontWeight="bold" className="text-primary">
            Bill From
          </Typography>
          {/* <Input helperText="da" {...register('name', { required: true })} label="Name" /> */}

          <div className="flex justify-center items-center gap-6">
            <Input {...register('city', { required: true })} label="City" />
            <Input {...register('postCode', { required: true })} label="Post Code" />
            <Input {...register('country', { required: true })} label="Country" />
          </div>

          <Typography size={Variant.Body1} fontWeight="bold" className="text-primary mb-6">
            Bill To
          </Typography>
          <Input {...register('clientName', { required: true })} label="Client’s Name" />
          <Input
            {...register('clientName', { required: true })}
            label="Client’s Email"
            placeholder="e.g. email@example.com"
          />
          <Input label="Street Address" />
          <div className="flex justify-center items-center gap-6 mt-6">
            <Input label="City" />
            <Input label="Post Code" />
            <Input label="Country" />
          </div>
          <div className="flex justify-center items-center gap-6 w-full">
            <Input type="date" label="Invoice Date" />
            <Input icon={IconsType.arrow} label="Payment Terms" />
          </div>
          <Input placeholder="e.g. Graphic Design Service" label="Project Description" />
          <div className="text-[1.125rem] font-bold text-grey400">Item List</div>
          <Input label="Item Name" />
          <div className="flex justify-center items-center gap-6 mt-6">
            <Input label="Qty." />
            <Input label="Price" />
            <Input
              disabled
              value="1"
              inputClassName="border-none cursor-not-allowed "
              classname="cursor-not-allowed bg-transparent"
              label="Total"
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
  )
}

export default CreateInvoiceForm
