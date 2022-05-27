import React, { useState } from 'react'
import './homelanding.css'
import leftqoutemark from '../../IMAGES1/left_quote.png'
import rightqoutemark from '../../IMAGES1/right_quote.png'
import workinactionimg from '../../IMAGES1/work_in_action_title.png'
import servicetitleImg from '../../IMAGES1/service_title.png'
import ourclient from '../../IMAGES1/our_clients_title.png';
import brand from '../../IMAGES1/prime1.png'
import keyboard from '../../IMAGES1/joinus_bg_1.png'
import pen from '../../IMAGES1/joinus_bg_2.png'
import book from '../../IMAGES1/joinus_bg_3.png'
import joinUs from '../../IMAGES1/join_us_title.png'
import plateformTechImg from '../../IMAGES1/platform & Tech..jpg'
import marketingService from '../../IMAGES1/digital_marketing.jpg'
import talentImg from '../../IMAGES1/talent_services.jpg'
import brand1 from '../../IMAGES1/brand_1.jpg';
import brand2 from '../../IMAGES1/brand_2.jpg';
import brand3 from '../../IMAGES1/brand_3.jpg';
import brand4 from '../../IMAGES1/brand_4.jpg';
import brand5 from '../../IMAGES1/brand_5.jpg';
import Navbar from './Navbar'
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom'
const HomeLanding = () => {

    const navigate = useNavigate();
    const [restImg, setrestImg] = useState([talentImg, marketingService]);
    const [activeImg, setActiveImg] = useState(plateformTechImg);
    const [influencerrestImg, setinfluencerrestImg] = useState([brand1, brand2, brand3, brand4]);
    const [influenceractiveImg, setinfluenceractiveImg] = useState(brand5);



    const changeUI = (e) => {

        if (e.target.id === 'first') {
            setrestImg(
                [talentImg, plateformTechImg]
            )
            setActiveImg(marketingService)
        }
        else if (e.target.id === 'second') {
            setrestImg(
                [marketingService, plateformTechImg]
            )
            setActiveImg(talentImg)
        }
        else {
            setrestImg(
                [talentImg, marketingService]
            )
            setActiveImg(plateformTechImg)
        }
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="home-landing-container">
                <Navbar />
                <div className="landing-page row m-0">
                    <div className="col col-mg-6 col-sm-6 col-xm-12  influencer-page-cont">
                        <h1> I AM BRAND.</h1>
                        <button onClick={()=>navigate("/brandform")} >Click Here</button>
                    </div>
                    <div className="col col-mg-6 col-sm-6 col-xm-12  brand-page-cont">
                        <h1> I AM INFLUENCER.</h1>
                        <button onClick={()=>navigate("/influencerform")}>Click Here</button>
                    </div>
                </div>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="quote-wrapper m-0 d-flex justify-content-center align-items-center  ">
                            <img src={leftqoutemark} alt="" />
                            <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dignissimos culpa ab vel? Itaque, alias.  ipsum dolor sit amet consectetur adipisicing elit. Illum placeat nam id voluptatum autem voluptate dignissimos, ipsa dolore eos voluptatibus, sint cumque ut error saepe consequuntur deserunt quod harum. Pariatur.</p>
                            <img src={rightqoutemark} alt="" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="quote-wrapper m-0 d-flex justify-content-center align-items-center  ">
                            <img src={leftqoutemark} alt="" />
                            <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dignissimos culpa ab vel? Itaque, alias.  ipsum dolor sit amet consectetur adipisicing elit. Illum placeat nam id voluptatum autem voluptate dignissimos, ipsa dolore eos voluptatibus, sint cumque ut error saepe consequuntur deserunt quod harum. Pariatur.</p>
                            <img src={rightqoutemark} alt="" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="quote-wrapper m-0 d-flex justify-content-center align-items-center  ">
                            <img src={leftqoutemark} alt="" />
                            <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dignissimos culpa ab vel? Itaque, alias.  ipsum dolor sit amet consectetur adipisicing elit. Illum placeat nam id voluptatum autem voluptate dignissimos, ipsa dolore eos voluptatibus, sint cumque ut error saepe consequuntur deserunt quod harum. Pariatur.</p>
                            <img src={rightqoutemark} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="global-tech-wrapper">
                <div className="global-tech-cont">
                    <div className="big-text-cont"><img src={servicetitleImg} alt="" /></div>
                    <div className="small-text-cont">
                        <h1>Global</h1>
                        <h3>AI-POWERED SERVICES</h3>
                        <h2> & TECHNOLOGIES.</h2>
                    </div>
                </div>
            </div>
            <div className="plateform-wrapper">
                <div className="global  ">
                    <div className="global-img-cont">
                        <img className='first' src={restImg[0]} alt="" />
                        <img className='second' src={restImg[1]} alt="" />
                        <img className='third' src={activeImg} alt="" />
                    </div>
                    <div className="global-text-cont">
                        <div id='first' onMouseOver={changeUI} defaultValue='marketing' className="text-cont">
                            <h1 id='first' >MARKETING SERVICE</h1>

                        </div>
                        <div id='second' onMouseOver={changeUI} defaultValue='talent' className="text-cont">
                            <h1 id='second'>TALENT SERVICE</h1>
                        </div>
                        <div id='third' onMouseOver={changeUI} defaultValue='tech' className="text-cont">
                            <h1 id='third'  >PLATEFORM & TECH</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="big-heading-links-wrapper">
                <div className="background-heading">
                    <h1>INFLUENCER MARKETING</h1>
                </div>
                <div className="big-heading-link-cont">
                    <h1 data-text="INFLUENCER MARKETING" className="big-heading">INFLUENCER MARKETING</h1>
                    <h1 data-text="SOCIAL EXPERIMENTAL" className="big-heading">SOCIAL EXPERIMENTAL</h1>
                    <h1 data-text="PERFORMANCE MARKETING & MEDIA" className="big-heading">PERFORMANCE MARKETING & MEDIA</h1>
                    <h1 data-text="CREATIVE CONTENT" className="big-heading">CREATIVE CONTENT</h1>
                    <h1 data-text="TRACKING & MEASURMENTS WITH INFLUSOFT" className="big-heading">TRACKING & MEASURMENTS WITH INFLUSOFT</h1>
                    <h1 data-text="STRATEGY" className="big-heading"> STRATEGY</h1>
                    <h1 data-text="VIEW ALL.." className="big-heading"> VIEW ALL..</h1>
                </div>
            </div>
            <div className="global-tech-wrapper">
                <div className="global-tech-cont">
                    <div className="big-text-cont "><img src={workinactionimg} alt="" /></div>
                    <div className="small-text-cont ">
                        <h1 style={{ fontSize: '5rem' }} > 80+ LEADING BRANDS</h1>
                        <p style={{ fontSize: '1.8rem', paddingTop: '3rem' }} > & THEIR AGENCIES LEVERAGE OUR INFLUENCER NETWORK ACROSS THE MARKETING CYCLE - FOR RESEARCH, SAMPLING, CONTENT CREATION & DISTRIBUTION, DRIVING ENGAGEMENT & CONVERSIONS, AT SCALE.</p>

                    </div>
                </div>
            </div>
            <div className="our-influencer-wrapper ">
                <div className="influencers "> 
                    <img className='brand brand1' src={influencerrestImg[0]} alt="" />
                    <img className='brand brand2' src={influencerrestImg[1]} alt="" />
                    <img className='brand brand3' src={influencerrestImg[2]} alt="" />
                    <img className='brand brand4' src={influencerrestImg[3]} alt="" />
                    <img className='brand brand5' src={influenceractiveImg} alt="" />

                </div>
                <div className="influencer-data">
                    <div className="influencer">
                        <h1>25</h1>
                        <h3>INFLUENCER</h3>
                    </div>
                    <div className="posts">
                        <h1>25</h1>
                        <h3>POSTS</h3>
                    </div>
                    <div className="engagements">
                        <h1>800+</h1>
                        <h3>ENGAGEMENTS</h3>
                    </div>
                </div>
            </div>
            <div className="clients-wrapper">

                <div className="client-heading-wrapper">
                    <div className="client-heading">
                        <div className="back-img">
                            <img src={ourclient} alt="" />
                        </div>
                        <div className="text">
                            <h1>OUR CLIENTS</h1>
                            <p>MEET OUR HAPPY CLIENTS</p>
                        </div>
                    </div>
                </div>
                <div className="brands-cont">
                    <Slider {...settings}>
                        <div>
                            <div className="brands-img-wrap">
                                <img src={brand} alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="brands-img-wrap">
                                <img src={brand} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="brands-img-wrap">
                                <img src={brand} alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="brands-img-wrap">
                                <img src={brand} alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="brands-img-wrap">
                                <img src={brand} alt="" />

                            </div>
                        </div>


                    </Slider>
                </div>
            </div>

            <div className="ready-to-join-us">
                <img className='keyboard' src={keyboard} alt="" />
                <img className='pen' src={pen} alt="" />
                <img className='joinus' src={joinUs} alt="" />
                <img className='book' src={book} alt="" />
                <div className="upper-cont">
                    <h1>READY TO JOIN US ? </h1>
                    <form action="">
                        <input type="email" name="email" id="email" placeholder='Email' />
                        <button type='submit' className='subsribe'>SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default HomeLanding