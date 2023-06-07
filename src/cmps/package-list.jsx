import PackagePreview from "./package-preview"

function PackageList({ packages, onSetShownCount }) {
    return (
        <section className="package-list">
            <h1 className="heading-title">top destinations</h1>
            {packages.length && <ul className="box-container">
                {packages.map(pack => {
                    return <PackagePreview pack={pack} />
                })}
            </ul>}
            <div className="load-more" onClick={onSetShownCount}>
                <span className="btn">
                    {packages.length >= 12 ? 'show less' : 'load more'}
                </span>
            </div>
        </section>
    )
}

export default PackageList