import { auth } from "@/auth.";
//used to redirect unauthorized users
import { redirect } from "next/navigation";
import styled from "styled-components"
import { ButtonSign } from "../components/ButtonSign";

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

export default async function About(){
    //checks if user has authorization
    const loggedIn = await auth();
    if(!loggedIn){
        redirect("/api/auth/signin");
    }

    return(

        <AboutWrapper>
            <Title>User Info!</Title>
            <pre>{JSON.stringify(loggedIn.user, null, 2)}</pre>
            <p>Name: {loggedIn.user?.name}</p>
            <p>Email: {loggedIn.user?.email}</p>
        </AboutWrapper>  
    );

}