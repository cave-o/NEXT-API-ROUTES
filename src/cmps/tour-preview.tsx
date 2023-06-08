import Image from 'next/image';

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
        <Image src={tour.imgUrl} alt="" layout="fill" objectFit="cover" />
      </div>
      <article>
        <h3>{tour.title}</h3>
        <p>{tour.content}</p>
        <a href="/book" className="btn">book now</a>
      </article>
    </li>
  );
}