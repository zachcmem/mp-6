"use client";

import styled from "styled-components"
import { ButtonSign } from "./ButtonSign";

const AboutWrapper = styled.div`
    text-align: center;
    border: 5px solid;
    border-color: #76ABAE;
    background-color:  #31363F;
    margin-left: 250px;
    margin-right: 250px;
`;

const Title = styled.h1`
    color: #EEEEEE; 
    font-family: Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace; 
    font-weight: bold; 
    text-align: center;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 50px
`;



export default function MainDiv(){
    
    return(
        <AboutWrapper>
            <Title>User Info!</Title>
            
        </AboutWrapper>  
    );
}