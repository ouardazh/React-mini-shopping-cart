import './About.css'
function About(){
    return(
        <section className='aboutSection'>
            <div className='firstBoxAbout'>
               <h2 className='titleAbout'><span>────</span> About Us <span>────</span></h2>
            <p className='paragraphAbout'>ShopReact is a modern shopping cart <br />
               Add your favorite items to the cart <br />
               built with React. Our goal is to provide <br />
               a simple and smooth shopping experience.</p>

               <button className='learnMoreBtn'>Learn More</button> 
            </div>

            <div className='secondBoxAbout'>
                <h2 className='secondTitleAbout'><span>────</span> Why Choose Us? <span>────</span></h2>
                <div className='containerAbout'>
                    <div>
                        <p className='icon'><i class="fa-solid fa-truck-fast"></i></p>
                        <h3>Fast & Easy</h3>
                        <p>A smooth shopping <br />
                           experience.</p>
                    </div>


                    <div>
                        <p className='icon'><i class="fa-solid fa-shield"></i></p>
                        <h3>Secure</h3>
                        <p>Your data is safe <br />
                         with us.</p>
                    </div>


                    <div>
                        <p className='icon'><i class="fa-regular fa-face-smile"></i></p>
                        <h3>Friendly Support</h3>
                        <p>We are here to help!</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default About;