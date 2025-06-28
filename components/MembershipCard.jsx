import beginner from '../images/beginner.avif'
function MembershipCard({ membershipImg, membershipTitle, membershipPrice, membershipDesc, imgClass }) {
    return (
        <article className="class-card">
            <img src={membershipImg} alt="a man planking" className={`class-img ${imgClass} `} />
            <div className='membership-content'>
                <h3>{membershipTitle}</h3>
                <p>{membershipDesc}</p>
                <p className='price'>{membershipPrice}</p>
                <button className='cta-btn'>Get Started</button>
            </div>
        </article>
    )
}

export default MembershipCard
