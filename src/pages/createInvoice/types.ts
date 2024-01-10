export interface CreateInvoiceProps {
  InvoiceId?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
