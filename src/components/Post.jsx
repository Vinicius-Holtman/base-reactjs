import { Header } from "./Header";

export function Post(props) {
  return (
    <>
      <Header />
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </>
  )
}