"use client";

// import styled from "styled-components";

// const HeaderWrapper = styled.header`
//     height: 120px;
//     border: 5px solid;
//     border-color: #76ABAE;
//     background-color: #31363F;

// `;

// const Title = styled.h1`
//     color: #EEEEEE; 
//     font-family: Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace; 
//     font-weight: bold; 
//     font-size: 50px;
//     text-align: center;
    
// `;

export default function Header(){
    return(
        <header className="h=[120px] border-[5px] border-[#76ABAE] bg-[#31363F]">
            <h1 className="text-[#EEEEEE] font-mono font-bold text-[50px] text-center">
                CS 391 OAuth Mini Project 6</h1>
        </header>
    );
}