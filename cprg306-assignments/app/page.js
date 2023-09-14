import Link from "next/link"
import StudentInfo from "./StudentInfo"

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <Link href='https://webdev2.warsylewicz.ca/week2'>Week 2</Link>
    </main>
  )
}
