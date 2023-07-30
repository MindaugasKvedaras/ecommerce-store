import { Category } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const timestamp = new Date().getTime();
  const cacheBustedURL = `${URL}/${id}?timestamp=${timestamp}`;

  const res = await fetch(cacheBustedURL);
  return res.json();
};

export default getCategory;

