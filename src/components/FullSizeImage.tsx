import { useVh } from '../hooks/useVh'

interface Props {
    src: string
    alt?: string
}

export default function FullScreenImage({ src, alt }: Props) {
  useVh()

  return (
    <div
      className=""
    >
      {/* 비율 유지하며 화면 가득 채우기 */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ objectPosition: 'top center' }}
      />
    </div>
  )
}
