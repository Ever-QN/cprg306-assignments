import ItemList from "./item-list";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <p className="px-4 mb-4 bg-slate-700 hover:underline"><Link href='/'>Home</Link></p>
            <ItemList />
        </main>
    )
}