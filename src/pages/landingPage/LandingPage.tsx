import DashboardLayout from 'src/components/dashboardLayout'
import Header from '../../components/header'
import React, { useState } from 'react'
import CreateInvoice from '../createInvoice'
import CreateInvoiceForm from '../../components/createInvoiceForm'
import InvoiceCard from '@/src/components/invoiceCard'

const LandingPage = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DashboardLayout className="xl:mx-[15.75rem] md:mx-12 mx-6 duration-200 ease-in-out flex justify-center items-center">
      <div className="flex justify-center item flex-col w-full">
        <div>
          <Header setIsOpen={setIsOpen} />
          <CreateInvoice setIsOpen={setIsOpen} InvoiceId="sdknsa" isOpen={isOpen}>
            <CreateInvoiceForm />
          </CreateInvoice>
        </div>
        <div className="m-auto mt-8 w-full rounded-lg">
          <InvoiceCard billingAmount="₹ 4000" billingDate="Jan 10 2024" clientName="Ansh" invoiceId="21RWX90" invoiceType="draft" />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default LandingPage
