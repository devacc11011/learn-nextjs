import {GetServerSidePropsContext} from "next";
import {BookData} from "@/types";

export default async function fetchOneBook(id: number):Promise<BookData|null> {
    const url = `http://localhost:12345/book/${id}`;

    try {
        const res  = await fetch(url);
        if(!res.ok){
            throw new Error(`Could not fetch books from ${url}`);
        }
        return await res.json();
    }catch (e){
        console.error(e);
        return null;
    }
}