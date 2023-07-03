"use client";
import { databases } from "@/appwrite";
import { ID, Query } from "appwrite";
//get user or create the user upon sign in 
import { getSession } from "next-auth/react";

const getUserId = async () => {
    const session = await getSession();
    const userEmail = session?.user?.email as string;
    if (!userEmail) return;
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_USERS_COLLECTION_ID!,
        [
            Query.equal('email', userEmail)
        ]   
    )
    if (data?.documents.length>0) {
        return data.documents[0].$id;
    }else {
        const {$id} = await databases.createDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_USERS_COLLECTION_ID!,
            ID.unique(),
            {
                email: userEmail, 
                name : session?.user?.name
            }
        )
        return $id;
    }
    

}

export default getUserId;
