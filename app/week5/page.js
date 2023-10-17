import ItemList from "./item-list";
import Link from "next/link";

export default function Page() {
    return (
        <main className='week3'>
            <p className="px-4 bg-slate-700"><Link href='/'>Home</Link></p>
            <ItemList />
        </main>
    )
}