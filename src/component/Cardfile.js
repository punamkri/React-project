import React from 'react'
import img2 from "../assets/image/img2.jpg"
import "../component/Cardfile.css"

export default function Cardfile () {
    return (
        <>
            <div className='conainer'>
                <div className='row'>
                    <div className='col-4'>
                        <img src={img2} alt=''></img>
                    </div>
                    <div className='col-8'>
                        <div className='row'>
                            <div className='col-4'>hii</div>
                            <div className='col-4'>hello</div>
                            <div className='col-4'>bye</div>

                        </div>

                    </div>
                </div>
            </div>
            <div>
                <h1>hello</h1>
            </div>
        </>

    )
}
