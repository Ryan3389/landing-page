import MembershipCard from "../components/MembershipCard"
import beginner from '../images/beginner.avif'
import intermediate from '../images/intermediate.webp'
import memberPlan from '../images/memberPlan.jpg'
function MembershipPage() {
    return (
        <section className="membership-section">
            <h2>Checkout Our Memberships</h2>
            <div className="membership-container">
                {/* <MembershipCard
                    membershipImg={beginner}
                    membershipTitle={"Basic Plan"}
                    membershipDesc={"Access to all classes 3x/week."}
                    membershipPrice={"$49/month"}
                /> */}
                <MembershipCard
                    membershipImg={intermediate}
                    membershipTitle={"Basic Plan"}
                    membershipDesc={"Access to all classes 3x/week."}
                    membershipPrice={"$49/month"}
                />
                <MembershipCard
                    membershipImg={memberPlan}
                    membershipTitle={"Pro Plan"}
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