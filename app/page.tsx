import Link from "next/link";

export default function home(){
  return(
    <>
    <h1>Home</h1>
    <Link
    href={'page1'}
    >Page1</Link>
    <Link
    href={'/page2'}>
      Page2
    </Link>
    </>
  )
}