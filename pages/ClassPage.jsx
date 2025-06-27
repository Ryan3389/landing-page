import boxing from '../images/boxing.jpg'
import HIIT from '../images/HIIT.jpg'
import military from '../images/military.jpg'
import ClassCard from '../components/ClassCard'
function ClassPage() {
    return (
        <section className="class-section">
            <h2>Check Out Our Classes</h2>
            <div className='class-container'>
                <ClassCard
                    classImg={boxing}
                    classTitle="Boxing Class"
                    classDesc="High-intensity training to build strength and confidence."
                />
                <ClassCard
                    classImg={HIIT}
                    classTitle="HIIT Class"
                    classDesc="High-intensity training to build strength and confidence."
                />
                <ClassCard
                    classImg={military}
                    classTitle="Military Fitness Class"
                    classDesc="High-intensity training to build strength and confidence."
                />
            </div>
        </section>
    )
}


export default ClassPage
