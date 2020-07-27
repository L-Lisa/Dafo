import React from "react"
import styled from 'styled-components/macro'
import MiningConstructionImg from "..//images/MiningConstructionImg.jpg"
import JohanImage from "..//images/JohanImage.jpg"
import UnceImage from "..//images/UnceImage.png"
import Shadi from "..//images/Shadi.jpg"
import contactUs from "..//images/contactUs.jpg"

export const MiningConstruction = () => {
    return (
        <Wrapper>
            <FlexDiv1>
                <Intro>
                    <img src={MiningConstructionImg} alt="Dafo Mining and construction" />
                    <MainText>
                        <h1>Fire safety for contracting mining machinery</h1>
                        <p>
                            Fires in vehicles often take hold very quickly and are hard to extinguish with a handheld extinguisher. A correctly dimensioned vehicle fire suppression system offers you fast, effective protection that
                            limits the consequences of a fire. We have until today sold more than 100 000 systems to leading manufacturers
                            such as Volvo, Atlas, CAT, Scania, Sandvik, Komatsu, MAN, John Deere, Ponsse etc.Insurance companies demand on-board vehicle fire suppression systems on machinery used for forestry,
                            peat and chipping. Correctly planned and installed, a vehicle fire suppression system is a fast and effective
                            way of providing the protection you need to prevent disaster. Dafo supply systems approved by SBF
                            in accordance with SBF 127 & SBF 128. Agents as Forrex, the unique non-corrosive freeze protected Wet Chemical is used.
                            We have more than 30 years’ experience of vehicle fire suppression systems, adapted to suit the most demanding conditions.
                        </p>

                    </MainText>
                </Intro>

            </FlexDiv1>
            <FlexDiv2>
                <ContactUs>
                    <h2>Data Sheet</h2>
                    <img src={UnceImage} alt="UNCE type-approved" className="largerImg" />
                    <h2>For more information</h2>
                    <h3 className="width90">Contact our representative</h3>
                    <img src={JohanImage} alt="Johan Larsson" className="person" />
                    <div>
                        <ul>
                            <li> <h3>Johan Larsson</h3></li>
                            <li>Dafo Middle East</li>
                            <li>General Manager</li>
                            <li>+971 55 143 60 88</li>
                        </ul>
                    </div>
                    <img src={Shadi} alt="Shadi Abdulla" className="person" />
                    <div>
                        <ul>
                            <li> <h3>Shadi Abdulla</h3></li>
                            <li>Dafo Middle East</li>
                            <li>Sales Manager</li>
                            <li>+971 55 800 55 09</li>
                        </ul>
                    </div>
                    <img src={contactUs} alt="Dafo Sales team" className="largerImg" />
                    <div>
                        <ul>
                            <li> <h3>Sales team</h3></li>
                            <li>Dafo Middle East</li>
                            <li><a href="mailto:sales@dafo-middle-east.com">sales@dafo-middle-east.com</a></li>
                        </ul>
                    </div>
                </ContactUs>
            </FlexDiv2>

        </Wrapper>
    )
}


const Wrapper = styled.main`
display:flex;
flex-direction:column;
margin: 0;
  padding: 0;
  box-sizing: border-box;
@media (min-width: 676px) {
        flex-direction:row;
        flex-wrap:wrap;
    }
    h2{
    color: white;
    font-weight:bold;
    background:black;
    width: max-content;
    width: 100%;
    text-align: center;
    margin-block-start: 0;
@media (min-width: 676px) {
    padding-bottom: 5px;
    }}
`;

const FlexDiv1 = styled.section`
margin: 0 auto;
@media(min-width: 676px){
    margin-right: 20px;
    width:65%;
}
`;
const FlexDiv2 = styled.section`
margin: 0 auto;
min-width: 300px;
@media(min-width:676px){
    min-width:unset;
    width:30%;
}
img{
    width:300px;
    height:auto;
    @media(min-width:676px){
    min-width:unset;
    width:100%;
}
}
`;
const Intro = styled.div`
width: 100%;
display:flex;
flex-direction: column;
align-items: center;
h1{
    font-weight:bold;
}
img{
    width:100%;
    height: auto;
}
`;

const MainText = styled.div`
padding: 0 30px;
p{
    font-size:1rem;
}
@media(min-width:676px){
    padding:0px;
    width:100%;
}
`;

const ContactUs = styled.article`
width:100%;
display:flex;
flex-direction: column;
align-items: center;
.largerImg{
    min-width:90%;
    height: auto;
}
.person{
    width:unset;
    width: 50% !important;
}
.width90{
    width:80%;
}
ul{
    list-style:none;
    display: inline;
    
}
li{
    padding: 10px 2px;
}
h3{
    display: inline;
}
div{
    padding-bottom: 10px;
}
a{
    text-decoration:none;
    color:#1c1c1c;
}
`;

