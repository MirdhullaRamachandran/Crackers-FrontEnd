import React from 'react'
import './About.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/NavBar/Footer/Footer'
 
 export default function About() {
   return (
    <>
        <main>
            <section id='nav-section'>
                <NavBar></NavBar>
            </section>

            <section id='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h3 className='about-h3'> Welcome to Crackers Sakthi Fireworks</h3>
                            <p><b>EXCLUSIVE STORE</b></p>
                            <p>We have started store for selling fireworks name Sakthi Fireworks. We provide variety of firecrackers including single and multi-sound crackers, sparklers, ground chakkars, flower pots, twinkling stars, pencils, fancy rockets, aerial and fancy fireworks, fancy whistling varieties, amorces, chorsa garlands, atom crackerss, ukkada and electric crackers. We are specialists in fireworks gift boxes and we have variety of gift boxes ranging from Rs.250 to Rs.2500. We introduce new crackers and packages every year for our beloved customers. Check our Sakthi Fireworks online shopping cart to buy crackers online in hassle-free.</p>
                            <h3 className='about-h3'><b>WHAT WE DO</b></h3>
                            <p>It’s pride to introduce ourselves ONLINE STORE TO SELL CRACKERS ONLINE.</p>
                            <p>This is an outcome of the experience and knowledge we share in the field of selling crackers. We are a wholesale trader of Multi brand fire crackers in SIVAKASI. We are in the field of selling crackers since 2005. We have our own exclusive showroom in SIVAKASI.</p>
                            <h3 className='about-h3'><b>We offer the best quality products at best price.</b></h3>
                            <p>One can buy crackers from us round the year.</p>
                            <p>Buying quality crackers during all season we came up with the solution to buy crackers online. The following are the advantage you can enjoy buying online.</p>
                            You don't need to stand in long queue to buy. Instead you can shop from home at a click of a button
                            <br></br>Selection procedure gets simpler
                            <br></br>All our varieties with detailed description of the products are available online.
                            <br></br>We request you to include us as a part of your grand celebration!
                            <h3 className='about-h3'><b>Online Ordering</b></h3>
                            <p>"Thanks to all our online customers. We make sure that we provide an excellent customer service even after sales by direct interaction with customers. Members in our online family are getting increased every day. Keep visiting our website to buy crackers online for special discount sales for festivals and other functions."</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='footer-section'>
                <Footer></Footer>
            </section>
        </main>
    </>
   )
 }
 