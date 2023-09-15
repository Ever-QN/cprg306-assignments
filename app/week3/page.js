import ItemList from "./item-list";
import Link from "next/link";

export default function Page() {
    return (
        <main className='week3'>
            <p><Link href='/'>Home</Link></p>
            <ItemList />
        </main>
    )
}