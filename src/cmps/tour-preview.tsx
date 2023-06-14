import Image from "next/image";
import Link from 'next/link';

interface ITour {
  id: number;
  title: string;
  content: string;
  imgUrl: string;
}

interface TourPreviewProps {
  tour: ITour;
}

export default function TourPreview({ tour }: TourPreviewProps) {
  return (
    <li className="box" key={tour.id}>
      <div className="img-container">
        <Image
          src={tour.imgUrl}
          alt=""
          fill
          sizes="100vw"
           />
      </div>
      <article>
        <h3>{tour.title}</h3>
        <p>{tour.content}</p>
        <Link href="/book" className="btn">book now</Link>
      </article>
    </li>
  );
}