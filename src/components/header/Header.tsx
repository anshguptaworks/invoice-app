import { IconsType } from "@/src/assets/types";
import Button from "@/src/components/button";
import { ButtonSize } from "@/src/components/button/button.types";
import Dropdown from "@/src/components/dropdown";
import Typography, { Variant } from "@/src/components/typography";

const Header = ({ setIsOpen }: HeaderProps): JSX.Element => {
  return (
    <div className="w-full flex justify-between">
      <div>
        <Typography
          className="md:text-[2rem]"
          size={Variant.H2}
          fontWeight="bold"
        >
          Invoices
        </Typography>
        <Typography size={Variant.Body1} fontWeight="medium">
          <span className="md:hidden">7 invoices</span>
          <span className="max-md:hidden"> There are 7 total invoices</span>
        </Typography>
      </div>
      <div className="flex justify-center items-center gap-10">
        <Dropdown />
      </div>
      <Button
        className="pl-[0.5rem] md:max-w-full max-w-[5.625rem] md:max-h-full max-h-[2.75rem] gap-2"
        size={ButtonSize.Medium}
        icon={IconsType.add}
        onClick={() => setIsOpen(true)}
      >
        <span className="md:hidden">New</span>
        <span className="max-md:hidden">New Invoice</span>
      </Button>
    </div>
  );
};
interface HeaderProps {
  setIsOpen: (isOpen: boolean) => void;
}

export default Header;
