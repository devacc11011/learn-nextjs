import {BookData} from "@/types";

export default async function fetchBooks(q?:string):Promise<BookData[]> {
    let url = 'http://localhost:12345/book'

    if(q){
        url+='/search?q='+q
    }

    try {
        const res  = await fetch(url);
        if(!res.ok){
            throw new Error(`Could not fetch books from ${url}`);
        }
        return await res.json();
    }catch (e){
        console.error(e);
        return [];
    }
}