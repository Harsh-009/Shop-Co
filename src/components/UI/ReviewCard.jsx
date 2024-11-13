import { FiMoreHorizontal } from "react-icons/fi";
import RatingReview from "./RatingReview";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

export default function ReviewCard({review}) {
  // Original date string
  const dateStr = review.date;

  // Convert to a Date object
  const date = new Date(dateStr);

  // Define options for formatting
  const options = { year: "numeric", month: "long", day: "numeric" };

  // Format the date
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="font-Satoshi text-black border border-[#00000030] py-3 px-5  flex flex-col gap-2 rounded-2xl">
      <div className="flex justify-between items-center leading-none">
        <RatingReview rating={review.rating} />
        <Menu placement="bottom-end">
          <MenuHandler>
            <Button className="h-8 w-8 flex items-center bg-white text-black justify-center text-xl rounded-full p-2 cursor-pointer">
              <FiMoreHorizontal />
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>
              <p className="text-red-500">Report</p>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <h3 className="text-2xl font-bold">{review.reviewerName}</h3>
      <p>{review.comment}</p>
      <p className="font-medium">Posted on {formattedDate}</p>
    </div>
  );
}
