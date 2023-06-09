import TourPreview from "./tour-preview";

function TourList({ tours, onSetShownCount }) {
  return (
    <section className="tour-list">
      <h1 className="heading-title">Top Destinations</h1>
      {tours.length > 0 && (
        <ul className="box-container">
          {tours.map((pack) => {
            return <TourPreview key={tours.id} tour={tours} />;
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
