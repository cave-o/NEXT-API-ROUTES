import TourPreview from "./tour-preview";

interface ITour {
  id: number;
  title: string;
  content: string;
  imgUrl: string;
  // Add other properties specific to a tour
}

interface TourListProps {
  tours: ITour[];
  onSetShownCount: () => void;
}

function TourList({ tours, onSetShownCount }: TourListProps) {
  return (
    <section className="tour-list">
      <h1 className="heading-title">Top Destinations</h1>
      {tours.length > 0 && (
        <ul className="box-container">
          {tours.map((tour) => {
            return <TourPreview key={tour.id} tour={tour} />;
          })}
        </ul>
      )}
      <div className="load-more" onClick={onSetShownCount}>
        <span className="btn">
          {tours.length >= 12 ? "Show Less" : "Load More"}
        </span>
      </div>
    </section>
  );
}

export default TourList;
