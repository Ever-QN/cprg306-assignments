import Link from "next/link"
import StudentInfo from "./StudentInfo"

export default function Home() {
  return (
    <>
      <h1 className='px-4 py-2 text-xl font-bold'>CPRG 306: Web Development 2 - Assignments</h1>
      <main className='px-4 py-2'>
        <StudentInfo/>
        <Link href='/week2'>Week 2</Link> <br />
        <Link href='/week3'>Week 3</Link> <br />
        <Link href='/week4'>Week 4</Link> <br />
        <Link href='/week5'>Week 5</Link> <br />
        <Link href='/week6'>Week 6</Link> <br />
        <Link href='/week7'>Week 7</Link> <br />
        <Link href='/week8'>Week 8</Link> <br />
        <p>(Week 9 was Midterm week, no link)</p>
        <Link href='/week10'>Week 10</Link> <br />
      </main>
    </>

  )
}