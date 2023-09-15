import Link from "next/link";
import StudentInfo from "../StudentInfo";

export default function Page() {
    return (
        <div className='week-two'>
            <p><Link href='/'>Home</Link></p>
            <h1>My Shopping List</h1>
            <StudentInfo/>
        </div>
    )
}