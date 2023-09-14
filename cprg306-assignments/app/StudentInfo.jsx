import Link from "next/link"

export default function StudentInfo() {
    return (
        <div class='student-info-container'>
            <p>Name: Quynh Ngo</p>
            <p>Course section: CPRG 306 A</p>
            <Link href='https://github.com/Ever-QN/cprg306-assignments'>Github Repository Link (Click me)</Link>
        </div>
    )
}