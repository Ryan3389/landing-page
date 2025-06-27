function ClassCard({ classImg, classTitle, classDesc }) {
    return (
        <article className='class-card'>
            <img src={classImg} alt="A male boxing" className='class-img' />
            <div className='class-content'>
                <h3>{classTitle}</h3>
                <p>{classDesc}</p>
                <button className='class-cta'>Join Now</button>
            </div>
        </article>
    )
}

export default ClassCard