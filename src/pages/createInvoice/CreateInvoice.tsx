import Drawer from '@/src/components/drawer'
import React, { useCallback } from 'react'
import { CreateInvoiceProps } from './types'
import { useForm } from 'react-hook-form'

const CreateInvoice = ({ setIsOpen, InvoiceId, children, isOpen }: CreateInvoiceProps): JSX.Element => {
  const { reset } = useForm()

  const handleCloseDrawer = useCallback(() => {
    setIsOpen(false)
    reset()
  }, [setIsOpen, reset])

  return (
    <Drawer isOpen={isOpen ?? false} title={InvoiceId} onClose={handleCloseDrawer}>
      {children}
    </Drawer>
  )
}

export default CreateInvoice
