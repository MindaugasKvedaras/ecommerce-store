import { Size } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const timestamp = new Date().getTime();
  const cacheBustedURL = `${URL}?timestamp=${timestamp}`;

  const res = await fetch(cacheBustedURL);
  return res.json();
};

export default getSizes;

