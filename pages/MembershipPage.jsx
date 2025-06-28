import MembershipCard from "../components/MembershipCard"
import beginner from '../images/beginner.avif'
import intermediate from '../images/intermediate.webp'
import memberPlan from '../images/memberPlan.jpg'
import personWorkout from '../images/personWorkout.jpg'
function MembershipPage() {
    return (
        <section className="membership-section">
            <h2>Checkout Our Memberships</h2>
            <div className="membership-container">
                <MembershipCard
                    membershipImg={beginner}
                    membershipTitle={"Basic Plan"}
                    membershipDesc={"Access to all classes 3x/week."}
                    membershipPrice={"$49/month"}
                    imgClass={"first-img"}
                />
                <MembershipCard
                    membershipImg={intermediate}
                    membershipTitle={"Pro Plan"}
                    membershipDesc={"Access to all classes 3x/week."}
                    membershipPrice={"$59/month"}
                />
                <MembershipCard
                    membershipImg={personWorkout}
                    membershipTitle={"Pro Plus Plan"}
                    membershipDesc={"Access to all classes 3x/week."}
                    membershipPrice={"$59/month"}
                />
                <MembershipCard
                    membershipImg={memberPlan}
                    membershipTitle={"Elite Plan"}
                    membershipDesc={"Access to all classes 3x/week."}
                    membershipPrice={"$70/month"}
                />
            </div>
        </section>
    )
}

export default MembershipPage