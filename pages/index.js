import Link from "next/link"

const Home = () => {
  return (
   <div>
    <h1>This is home page</h1>
    <header>
      <Link href="/videos">Videos</Link>
    </header>
   </div>
  )
}

export default Home
