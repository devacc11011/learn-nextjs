import {BookData} from "@/types";

export default async function fetchRandomBooks():Promise<BookData[]> {
    const url = 'http://localhost:12345/book/random'
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