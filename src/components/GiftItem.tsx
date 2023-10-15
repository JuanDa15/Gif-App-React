interface Props {
  url: string,
  width: string,
  height: string
}

export default function GiftItem ({url, width, height}: Props) {
  return (
    <li >
      <img  
        className="h-auto max-w-full rounded-lg aspect-square" 
        src={url} 
        width={width}
        height={height}
        loading='lazy'
      />
    </li>
  )
}