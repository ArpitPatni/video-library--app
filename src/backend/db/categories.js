import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Productivity",
    description:
      "Productivity is very necessary in Life.",
  },
  {
    _id: uuid(),
    categoryName: "Wellness",
    description:
      "Wellness is very important aspcet of life.",
  },
  {
    _id: uuid(),
    categoryName: "Music",
    description:
      "Music helps us to keep fresh and energetic.",
  },
  {
    _id: uuid(),
    categoryName: "Inspirational",
    description:
      "Inspirational videos are really necessary in life.",
  },
];
