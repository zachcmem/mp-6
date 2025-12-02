import { auth } from "@/auth.";
//used to redirect unauthorized users
import { redirect } from "next/navigation";
// import styled from "styled-components"
// import { ButtonSign } from "../components/ButtonSign";

// const AboutWrapper = styled.div`
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

export default async function About(){
    //checks if user has authorization
    const loggedIn = await auth();
    if(!loggedIn){
        redirect("/api/auth/signin");
    }

    return(

        <div className="text-center border-[5px] border-[#76ABAE] bg-[#31363F] ml-[250px] mr-[250px]">
            <h1 className="text-[EEEEEE] font-mono font-bold text-center mt-[10px] mx-[10px] text-[50px]">
                User Info!</h1>
            <h2 className="text-[EEEEEE] font-mono text-center mt-[10px] mx-[10px] text-[50px]">Name: {loggedIn.user?.name}</h2>
            <h2 className="text-[EEEEEE] font-mono text-center mt-[10px] mx-[10px] text-[50px]">Email: {loggedIn.user?.email}</h2>
        </div>
    );

}