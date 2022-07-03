import React from 'react'
import img2 from "../assets/image/img2.jpg"
import img from "../assets/image/img1.jpg"
import img3 from "../assets/image/img3.jpg"
import img4 from "../assets/image/img4.jpg"
import "../component/Sectiontwo.css"

export default function Sectiontwo() {
    return (
        <>
            <div className='container-fluid clscontain '>
                <div className='container contain py-3'>
                    <div className='left-text'><h3>Required <span>to Visit</span></h3> </div>

                    <div className='row py-5 '>
                        <div className='col-sm-4 col-md-4 col-lg-4'>

                            {/* <img src={img2} alt='' className='img-fluid'></img> */}
                            <div class="card" style={{ width: "0.34444 rem" }} >
                                <img class="card-img-top image-section" src={img} alt="Card image cap" />
                                {/* <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div> */}
                            </div>
                        </div>
                        <div className='col-sm-8 col-md-8 col-lg-8'>
                            <div className='row'>
                                <div className='col-sm-4 col-md-4 col-lg-4 '>
                                    {/* <img src={img} alt='' className='img-fluid'></img> */}
                                    <div class="card clsmr" style={{ width: "0.3333 rem" }} >
                                        <img class="card-img-top" src={img2} alt="Card image cap" />
                                        <div class="card-body">
                                            <h4 class="card-text">Car Tour Africa 10 Days</h4>
                                            <div className='card-para'><p>Store <span className='mssg'>Visiter Mode</span></p></div>
                                            <div className='Card-icon'><a href='#' ><i class="fa-solid fa-person person"></i><span className='cls'>4 People</span></a></div>
                                            <div className='Card-icon'><a href='#'><i class="fa-solid fa-clock person"></i><span className='cls'>10 Days</span></a></div>
                                            <div className='withicon '>
                                                <div className='icon'><i class="fa-solid fa-heart person"></i></div>
                                                <h5 className='money'>$7589.56</h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-sm-4 col-md-4 col-lg-4'>
                                    {/* <img src={img2} alt='' className='img-fluid'></img> */}
                                    <div class="card  clsmr" style={{ width: "0.3333 rem" }} >
                                        <img class="card-img-top" src={img3} alt="Card image cap" />
                                        <div class="card-body ">
                                        <h4 class="card-text">Car Tour Africa 10 Days</h4>
                                            <div className='card-para'><p>Store <span className='mssg'>Visiter Mode</span></p></div>
                                            <div className='Card-icon'><a href='#' ><i class="fa-solid fa-person person"></i><span className='cls'>4 People</span></a></div>
                                            <div className='Card-icon'><a href='#'><i class="fa-solid fa-clock person"></i><span className='cls'>10 Days</span></a></div>
                                            <div className='withicon d-flex'>
                                                <div className='icon'><i class="fa-solid fa-heart person"></i></div>
                                                <h5 className='money'>$7589.56</h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-sm-4 col-md-4 col-lg-4 '>
                                    {/* <img src={img2} alt='' className='img-fluid'></img> */}
                                    <div class="card clsmr" style={{ width: "0.3333 rem" }} >
                                        <img class="card-img-top" src={img4} alt="Card image cap" />
                                        <div class="card-body">
                                        <h4 class="card-text">Car Tour Africa 10 Days</h4>

                                        <div className='card-para'><p>Store <span className='mssg'>Visiter Mode</span></p></div>
                                            <div className='Card-icon'><a href='#' ><i class="fa-solid fa-person person"></i><span className='cls'>4 People</span></a></div>
                                            <div className='Card-icon'><a href='#'><i class="fa-solid fa-clock person"></i><span className='cls'>10 Days</span></a></div>
                                            <div className='withicon d-flex'>
                                                <div className='icon'><i class="fa-solid fa-heart person"></i></div>
                                                <h5 className='money'>$7589.56</h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
