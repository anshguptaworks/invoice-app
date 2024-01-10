import React from "react";

interface TagProps {
  type: "paid" | "draft" | "pending";
}

const tagStyles = {
  paid: {
    styles: "bg-green50 text-green100",
    content: "Paid",
  },
  draft: {
    styles: "bg-[#F4F4F5] text-[#373B53]",
    content: "Draft",
  },
  pending: {
    styles: "bg-[#FFF9F0] text-[#FF8F00]",
    content: "Pending",
  },
};

const Tag = (props: TagProps): JSX.Element => {
  const { styles, content } = tagStyles[props.type];

  return (
    <div className="flex justify-center items-center">
      <div
        className={`px-7 py-3 ${styles} gap-2 rounded-md min-w-[104px] max-w-[126px] h-10 font-bold text-center`}
      >
        ● {content}
      </div>
    </div>
  );
};

export default Tag;
