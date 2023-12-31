import { Gift } from "../interfaces/gift"
import GiftItem from "./GiftItem"

interface Props {
  data: Gift[]
}

export default function GiftsList ({ data }: Props) {
  return (
    <>
      {
        (data.length > 0) && (
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4" data-testid="grid-with-data">
            {
              data.map((gif) => (
                <GiftItem 
                  key={gif.id} 
                  url={gif.images.fixed_width.url} 
                  width={gif.images.fixed_width.width}
                  height={gif.images.fixed_width.height}
                />
              ))
            }
          </ul>
        )
      }
      {
        (data.length === 0) && (
          <p className="p-4 bg-cyan-200 rounded-md border-[2px] border-solid border-cyan-700 text-cyan-700 font-semibold">
            There is no data for this category
          </p>
        )
      }
    </>
  )
}