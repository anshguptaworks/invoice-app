import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Typography from '@/src/components/typography/Typography'
import { Variant } from '@/src/components/typography'
import FormInput from '@/src/organisms/formInput/FormInput'
import Button from '@/src/components/button/Button'
import { ButtonVariant } from '@/src/components/button/button.types'
import ReactSelect from '../ReactSelect/ReactSelect'

interface IForm {
  streetAddress: string
  city: string
  postCode: string
  country: string
  clientName: string
  clientEmail: string
  clientStreetAddress: string
  clientCity: string
  clientPostCode: string
  clientCountry: string
  issueDate: string
}
export const colourOptions = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' }
]

const CreateInvoiceForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IForm>()

  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-start items-start flex-col gap-6 w-full">
          <Typography size={Variant.Body1} fontWeight="bold" className="text-primary">
            Bill From
          </Typography>
          <FormInput
            control={control}
            id="streetAddress"
            placeholder="Enter Street Address"
            {...register('streetAddress', { required: 'Street Address is required' })}
            label="Street Address"
          />
          {errors.streetAddress && <span>{errors.streetAddress?.message}</span>}
          <div className="flex justify-center items-center gap-6">
            <FormInput
              control={control}
              id="city"
              placeholder="Enter City"
              {...register('city', { required: 'City is required' })}
              label="City"
            />
            {errors.city && <span>{errors.city?.message}</span>}

            <FormInput
              control={control}
              id="postCode"
              placeholder="Enter Post Code"
              {...register('postCode', { required: 'Post Code is required' })}
              label="postCode"
            />
            {errors.city && <span>{errors.postCode?.message}</span>}

            <FormInput
              control={control}
              id="country"
              placeholder="Enter Country"
              {...register('country', { required: 'Country is required' })}
              label="Country"
            />
            {errors.country && <span>{errors.country?.message}</span>}
          </div>
          <Typography size={Variant.Body1} fontWeight="bold" className="text-primary">
            Bill From
          </Typography>
          <FormInput
            control={control}
            id="clientName"
            placeholder="Enter Client’s Name"
            {...register('clientName', { required: 'Client’s Name is required' })}
            label="Client’s Name"
          />
          {errors.streetAddress && <span>{errors.streetAddress?.message}</span>}
          <FormInput
            control={control}
            id="clientEmail"
            placeholder="Enter Client’s Email"
            {...register('clientEmail', { required: 'Client’s Email is required' })}
            label="Client’s Email"
          />
          {errors.streetAddress && <span>{errors.clientEmail?.message}</span>}

          <FormInput
            control={control}
            id="clientStreetAddress"
            placeholder="Enter Street Address"
            {...register('clientStreetAddress', { required: 'Street Addressis required' })}
            label="Street Address"
          />
          {errors.streetAddress && <span>{errors.clientStreetAddress?.message}</span>}

          <div className="flex justify-center items-center gap-6">
            <FormInput
              control={control}
              id="clientCity"
              placeholder="Enter City"
              {...register('clientCity', { required: 'City is required' })}
              label="City"
            />
            {errors.city && <span>{errors.clientCity?.message}</span>}

            <FormInput
              control={control}
              id="clientPostCode"
              placeholder="Enter Post Code"
              {...register('clientPostCode', { required: 'Post Code is required' })}
              label="postCode"
            />
            {errors.city && <span>{errors.clientPostCode?.message}</span>}

            <FormInput
              control={control}
              id="clientCountry"
              placeholder="Enter Country"
              {...register('clientCountry', { required: 'Country is required' })}
              label="Country"
            />
            {errors.country && <span>{errors.clientCountry?.message}</span>}
          </div>

          <FormInput
            control={control}
            id="issueDate"
            placeholder="Enter Issue Date"
            {...register('issueDate', { required: 'Issue Date is required' })}
            label="Issue Date"
            type="date"
          />
          {errors.country && <span>{errors.issueDate?.message}</span>}

          <ReactSelect label="Payment Terms" options={colourOptions} />

          <Button
            buttonType="submit"
            variant={ButtonVariant.Secondary}
            isFullWidth
            className="text-black bg-grey500"
          >
            + Add New Item
          </Button>
        </div>
      </form>
    </>
  )
}

export default CreateInvoiceForm
