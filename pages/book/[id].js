import { useRouter } from "next/router";
import { fetchBookDetails } from "../../utils/fetchBooks";

export default function BookDetail({ book }) {
  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.cover} alt={book.title} />
      <p>{book.description}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const book = await fetchBookDetails(context.params.id);
  return { props: { book } };
}
