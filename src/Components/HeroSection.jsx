// import React from "react";
import React, { useState } from 'react';

import './HeroSection.css'
import Spline from '@splinetool/react-spline';


function Content() {
    return (
        <>
            <div className="herosec" id="herosec">
                <div className="content">
                    <div className="myna">
                        <h1>I'm</h1>
                        <h1 className="Name">Shivam,</h1>
                    </div>
                    <div className="subtext">
                        <h2>
                            Web
                        </h2>
                        <h2 className="developer">
                        Developer
                        </h2>
                    </div>
                </div>
                <div className="threed">
                    {/* <Spline className="Spline" scene="https://prod.spline.design/DkD69UknjBGtmZQj/scene.splinecode" /> */}
                    <Spline className="Spline" scene="https://prod.spline.design/hFSFhjY8Arnsaom1/scene.splinecode" />

                   
                </div>
            </div>
            {/* <div className="second">
            <h1>Rishabh</h1>
            </div> */}
        </>
    );
};
export default Content;