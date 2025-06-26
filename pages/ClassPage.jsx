function ClassPage() {
    return (
        <section className="class-section">
            <div className="class-container">
                <h2>Checkout our Classes</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic dolores deserunt accusantium autem perspiciatis! Amet magnam laborum enim eum aliquid.</p>
                {/* Move the articles into a component */}
                <article className="class-card">
                    <h3>Workout Class</h3>
                    <p>Calories Burned</p>
                    <p>Description</p>
                </article>
                <article className="class-card">
                    <h3>Workout Class</h3>
                    <p>Calories Burned</p>
                    <p>Description</p>
                </article>
                <article className="class-card">
                    <h3>Workout Class</h3>
                    <p>Calories Burned</p>
                    <p>Description</p>
                </article>

                <button className="cta-btn">Class CTA</button>
            </div>
        </section>
    )
}

export default ClassPage