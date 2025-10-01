
export default async function ProductsPage() {
    const res = await fetch('http://localhost:3000/api/items');
    const data = await res.json();
    console.log(data);
    return (
        <div className="grid grid-cols-6 gap-5">
            {data.map((item) => <div className="p-5 bg-gray-800 rounded-2xl">
                <h2>{item.id}</h2>
                <h3>{item.title}</h3>
            </div>)}
        </div>
    )
}
