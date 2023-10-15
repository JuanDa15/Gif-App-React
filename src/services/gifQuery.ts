import { Gift } from "../interfaces/gift";
import { ApiResponse } from "../interfaces/apiResponse";

export default async function getGifts(
  category: string,
  limit: number
) {
  const domain = 'https://api.giphy.com'
  const key = 'UxmtUnfAK8zm8zZAB8wtcm4w0s62M97V'
  const resp = await fetch(`${domain}/v1/gifs/search?api_key=${key}&q=${category}&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
  const { data }: ApiResponse<Gift[]> = await resp.json();
  return data;
}