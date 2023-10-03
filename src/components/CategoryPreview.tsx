import GiftsList from "./GiftsList";
import GiftsListSkeleton from "./GiftsListSkeleton";
import useGifts from "../hooks/useGifts";

interface Props {
  category: string;
}

export default function CategoryPreview({
  category
}: Props): JSX.Element {
  const { gifts, loading} = useGifts(category, 4);

  return (
    <section className="bg-gray-900 rounded-md p-4 mt-4 flex flex-col gap-4">
      <h2 className="text-3xl font-medium">
        {'< '}
        <span className="text-purple-500">{category}</span>
        {' >'}
      </h2>
      {
        loading && 
          <GiftsListSkeleton />
      }
      {
        !loading && (
          <GiftsList data={gifts} />
        )
      }
    </section>
  )
}
