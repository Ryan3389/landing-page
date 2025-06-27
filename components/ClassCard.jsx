function ClassCard({ classImg, classTitle, classDesc }) {
    return (
        <article className='class-card'>
            <img src={classImg} alt="A male boxing" className='class-img' />
            <div className='class-content'>
                <h3>{classTitle}</h3>
                <p>{classDesc}</p>
                <button className='cta-btn'>Join Now</button>
            </div>
        </article>
    )
}
// function PriceCard() {
//     return (
//         <article className='class-card'>
//             <img src={boxing} alt="A male boxing" className='class-img' />
//             <div className='class-content'>
//                 <h3>Boxing Class</h3>
//                 <p>High-intensity training to build strength and confidence.</p>
//                 <button className='cta-btn'>Join Now</button>
//             </div>
//         </article>
//     )
// }

export default ClassCard