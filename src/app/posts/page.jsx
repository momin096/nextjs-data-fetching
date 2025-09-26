import Link from "next/link";


export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()
    return data
}

export default async function Posts() {
    const posts = await getPosts();
    return (
        <div className="grid grid-cols-4 gap-5 container mx-auto mt-10">
            {
                posts.map((post) => {
                    return <div key={post.id} className="bg-gray-800 p-5 rounded-2xl space-y-5">
                        <p className="text-xl ">{post.title}</p>
                        <p >{post.body}</p>
                        <Link className="px-5 py-2 rounded-lg bg-gray-900" href={`/posts/${post.id}`}>Details</Link>
                    </div>
                })
            }


        </div>
    )
}
