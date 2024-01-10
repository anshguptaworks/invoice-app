import cx from "classnames";
import { useEffect } from "react";
import Typography from "../typography";
import { Variant } from "../typography";

const Drawer = ({ isOpen, title, children, onClose }: DrawerProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div>
      {isOpen && (
        <div
          className={cx(
            "fixed z-30 inset-0 bg-black transition-opacity duration-900 ease-in-out",
            {
              "opacity-50": isOpen,
              "opacity-0": !isOpen,
            }
          )}
          onClick={onClose}
        />
      )}

      <div
        className={cx(
          "fixed top-0 left-0 md:left-[5.5rem] pl-4 z-40 h-screen bg-white  transform transition-all duration-500 ease-in-out md:w-[40rem] w-full rounded-r-[1.25rem]",
          {
            "translate-x-0": isOpen,
            "-translate-x-[130%]": !isOpen,
          }
        )}
      >
        <div className="h-full flex flex-col justify-start px-14 py-8 w-full  min-h-screen overflow-y-auto">
          <Typography className="pb-12" size={Variant.H1} fontWeight="bold">
            Edit <span className="text-grey200">#</span>
            {title}
          </Typography>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

interface DrawerProps {
  isOpen: boolean;
  title?: string | JSX.Element;
  children: React.ReactNode;
  onClose: VoidFunction;
}

export default Drawer;
