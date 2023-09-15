export default function Item({name, quantity, category}) {
    return (
        <li className='list-none'>
            <ul>{name}</ul>
            <ul>{quantity}</ul>
            <ul>{category}</ul>
        </li>
    )
}