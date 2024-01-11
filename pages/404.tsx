import { getIcons } from "@/src/assets";
import { IconsType } from "@/src/assets/types";
import Button from "@/src/components/button";
import {
  ButtonSize,
  ButtonVariant,
} from "@/src/components/button/button.types";
import { Variant } from "@/src/components/typography";
import Typography from "@/src/components/typography/Typography";
import { useRouter } from "next/router";
import React from "react";

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center flex-col m-auto mt-8 md:mt-28 mx-8 md:mx-0">
      <Typography
        size={Variant.H3}
        fontWeight="bold"
        className="text-primary mb-5 md:text-4xl"
      >
        This Page is outside of the universe
      </Typography>
      <div className="mt-4 md:mt-8">{getIcons(IconsType.notFound)}</div>
      <Button
        onClick={handleGoBack}
        size={ButtonSize.Medium}
        variant={ButtonVariant.Secondary}
        buttonType="button"
        iconClass="stroke-white fill-white max-w-6 max-h-6"
        icon={IconsType.home}
        className="text-white hover:bg-grey25 active:bg-grey200 px-20 md:px-[7.188rem] mt-12 md:mt-32"
      >
        Go back to homepage
      </Button>
      <Typography
        size={Variant.H3}
        fontWeight="bold"
        className="mt-8 text-center"
      >
        The page you are trying to access doesn’t exist or has been moved. Try
        going back to our homepage.
      </Typography>
      <Typography
        size={Variant.Body2}
        fontWeight="bold"
        className="mt-1 md:text-base"
      >
        If you think this is an error, contact our support team at &nbsp;
        <a className="text-primary" href="mailto:">
          support@invoiceapp.com?subject=Error%404
        </a>
      </Typography>
    </div>
  );
};

export default NotFoundPage;
