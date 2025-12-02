"use client";

// import styled from "styled-components"
// import { ButtonSign } from "./ButtonSign";

// const MainWrapper = styled.div`
//     text-align: center;
//     border: 5px solid;
//     border-color: #76ABAE;
//     background-color:  #31363F;
//     margin-left: 250px;
//     margin-right: 250px;
// `;

// const Title = styled.h1`
//     color: #EEEEEE; 
//     font-family: Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace; 
//     font-weight: bold; 
//     text-align: center;
//     margin-top: 10px;
//     margin-left: 10px;
//     margin-right: 10px;
//     font-size: 50px
// `;



export default function MainDiv(){
    
    return(
        <div className="text-center border-[5px] border-[#76ABAE] bg-[#31363F] ml-[250px] mr-[250px]">
            <h1 className="text-[EEEEEE] font-mono font-bold text-center mt-[10px] mx-[10px] text-[50px]">Sign In!</h1>
            <a href="/api/auth/signin?callbackUrl=/about">
            {/* made this regular button from Button Sign */}
                <button className="bg-[#76ABAE] font-mono font-bold text-[30px] rounded-[10px] text-[#222831] border border-[#EEEEEE] text-center ml-[10px] h-[100px] w-[300px mt-[20px] mb-[20px]">
                    Sign In With Github</button>
            </a>
            <br/>
        </div>  
    );
}