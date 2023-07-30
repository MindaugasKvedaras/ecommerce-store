import { Product } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const timestamp = new Date().getTime();
  const cacheBustedURL = `${URL}/${id}?timestamp=${timestamp}`;

  const res = await fetch(cacheBustedURL);
  return res.json();
};

export default getProduct;

