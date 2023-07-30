import { Category } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const timestamp = new Date().getTime();
  const cacheBustedURL = `${URL}?timestamp=${timestamp}`;

  const res = await fetch(cacheBustedURL);
  return res.json();
};

export default getCategories;

