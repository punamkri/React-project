import React from 'react'
import Img5 from "../assets/image/img5.jpg"
import "../component/Section.css"


export default function Section() {
    return (
        <>
            <section>
                <div className="container-fluid class-file">

                    <div className='row'>
                        <div className='col-sm-12 col-md-9 col-lg-6 '>
                            <div className='image-text'><h1>Find <span> Adventures,</span>
                                You<br />Want to talk about</h1></div>
                            <form class="form-block">
                                <input class="form" type="Search Tour" placeholder="Search Tour" aria-label="Search" />
                                
                                <div class="input-group-append">
                                    <button class="btn btn-secondary" type="button">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </div>
                                {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit"> Search</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
