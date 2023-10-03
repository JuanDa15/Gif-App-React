import { Gift } from "../interfaces/gift";
import { ApiResponse } from "../interfaces/apiResponse";

export default async function getGifts(
  category: string,
  limit: number
) {
  const resp = await fetch(`${import.meta.env.VITE_DOMAIN}/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&q=${category}&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
  const { data }: ApiResponse<Gift[]> = await resp.json();
  return data;
}