import { Billboard } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const timestamp = new Date().getTime();
  const cacheBustedURL = `${URL}/${id}?timestamp=${timestamp}`;

  const res = await fetch(cacheBustedURL);
  return res.json();
};

export default getBillboard;

