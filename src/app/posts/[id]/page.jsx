
export const getSinglePost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

export async function generateMetadata({ params }) {
    // read route params
    const { id } = await params

    // fetch data
    const singlePost = await getSinglePost(id)



    return {
        title: singlePost.title,
        description: singlePost.body,
    }
}


export default async function SinglePost({ params }) {
    const p = await params;
    const singlePost = await getSinglePost(p.id);

    return (
        <div className="flex items-center justify-center max-w-xl mx-auto mt-5">
            <div className="bg-gray-800 p-5 rounded-2xl space-y-5">
                <p className="text-2xl ">{singlePost.title}</p>
                <p >{singlePost.body}</p>
            </div>
        </div>
    )
}
