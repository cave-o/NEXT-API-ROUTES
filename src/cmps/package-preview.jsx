import Image from 'next/image'

function PackagePreview({ pack }) {
    return (
        <li className="box" key={pack.id}>
            <div className="img-container">
                <Image fill src={pack.imgUrl} alt="" />
            </div>
            <article>
                <h3>{pack.title}</h3>
                <p>{pack.content}</p>
                <a href="/book" className="btn">book now</a>
            </article>
        </li>

    )
}

export default PackagePreview