import TourPreview from "./tour-preview"

function TourList({ tour, onSetShownCount }) {
    return (
        <section className="tour-list">
            <h1 className="heading-title">top destinations</h1>
            {tours.length && <ul className="box-container">
                {tours.map(pack => {
                    return <TourPreview tour={tour} />
                })}
            </ul>}
            <div className="load-more" onClick={onSetShownCount}>
                <span className="btn">
                    {tours.length >= 12 ? 'show less' : 'load more'}
                </span>
            </div>
        </section>
    )
}

export default TourList