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
        // <MainWrapper>
        //     <Title>Sign In!</Title>
        <main>
            <a href="/api/auth/signin?callbackUrl=/about">
            {/* made this regular button from Button Sign */}
                <button>Sign In With Github</button>
            </a>
            <br/>
        </main>
            
         
        // </MainWrapper>  
    );
}