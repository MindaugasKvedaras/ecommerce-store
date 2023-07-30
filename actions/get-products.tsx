import qs from "query-string";

import { Product } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;
const timestamp = new Date().getTime();
const cacheBustedURL = `${URL}?timestamp=${timestamp}`;

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: cacheBustedURL,
    query: {
        colorId: query.colorId,
        sizeId: query.sizeId,
        categoryId: query.categoryId,
        isFeatured: query.isFeatured
    },
  });  

  const res = await fetch(url);
  return res.json();
};

export default getProducts;

