import { auth } from "@/auth.";
//used to redirect unauthorized users
import { redirect } from "next/navigation";

export default async function About(){
    //checks if user has authorization
    const loggedIn = await auth();
    if(!loggedIn){
        redirect("/api/auth/signin");
    }

    return(

        <div className="text-center border-[5px] border-[#76ABAE] bg-[#31363F] ml-[250px] mr-[250px]">
            <h1 className="text-[#EEEEEE] font-mono font-bold text-center mt-[10px] mx-[10px] text-[50px]">
                User Info!</h1>
            <h2 className="text-[#EEEEEE] font-mono text-center mt-[10px] mx-[10px] text-[50px]">Name: {loggedIn.user?.name}</h2>
            <h2 className="text-[#EEEEEE] font-mono text-center mt-[10px] mx-[10px] text-[50px]">Email: {loggedIn.user?.email}</h2>
        </div>
    );

}