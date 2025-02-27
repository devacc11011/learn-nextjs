import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import {ReactNode, useEffect, useState} from "react";
import BookItem from "@/components/book-item";
import {GetServerSidePropsContext, InferGetServerSidePropsType, InferGetStaticPropsType} from "next";
import fetchBooks from "@/lib/fetch-books";
import {BookData} from "@/types";

// export const getStaticProps = async (context:GetServerSidePropsContext)=>{
//
//   const q = context.query.q as string;
//   const books= await fetchBooks(q);
//   return{
//     props:{
//       books
//     }
//   }
// }

export default function Page() {
  const [books,setBooks] = useState<BookData[]>([]);

  const router = useRouter();
  const q = router.query.q;

  const searchResult = async ()=>{
    const data =await fetchBooks(q as string)
    setBooks(data)
  }
  useEffect(()=>{
    if(q){
    searchResult();
    }
  },[q])
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
