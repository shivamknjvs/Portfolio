import React, { useEffect } from "react";
import './Container.css'

import htmlLogo from './Images/htmllogo.png'
import cssLogo from './Images/my.png'
import jsLogo from './Images/jslogo.png'
import reactLogo from './Images/reactslogo.png'
// setTimeout
function ContentTwo({val}) {
  
    // useEffect(() => {
       
   
        return (
    //         <>
    //         <h1>shivamji</h1>
    //         </>
    // )
    //   }, [val]);
        <div className="meaningfull">
            <div className="topbg">
                <div className="mySkillHeading">
                    <h2>My</h2><h2 id="Skills">{val}</h2>
                </div>
                <div className="skills">
                    <div className="skill" id="html">
                        <div className="logo">
                            <img src={htmlLogo} alt="" />
                        </div>
                        <div className="skillcon">
                            <div className="container" >
                                <div className="html">90%</div>
                            </div>
                        </div>
                    </div>
                    <div className="skill" id="css">
                        <div className="logo">
                            <img src={cssLogo} alt="" />
                        </div>
                    </div>
                    <div className="skill" id="js">
                        <div className="logo">
                            <img src={jsLogo} alt="" />
                        </div>
                    </div>
                    <div className="skill" id="react">
                        <div className="logo">
                            <img src={reactLogo} alt="" />
                        </div>
                    </div>
                    <div className="skill" id="">
                        <div className="logo">
                            <img src={reactLogo} alt="" />
                        </div>
                    </div>
                    <div className="skill">
                        <div className="logo">
                            <img src={reactLogo} alt="" />
                        </div>
                    </div>
                    <div className="skill">
                        <div className="logo">
                            <img src={reactLogo} alt="" />
                        </div>
                    </div>


                </div>
            </div>

        </div>
       
       );
    
};
export default ContentTwo;