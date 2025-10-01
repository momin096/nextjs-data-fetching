import dbConnect from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {

    const { id } = await params;

    const singleData = await dbConnect("practice_data").findOne({ _id: new ObjectId(id) })
    return Response.json({ singleData })
}

export async function DELETE(req, { params }) {

    const { id } = await params;
    const data = await dbConnect("practice_data").deleteOne({ _id: new ObjectId(id) })

    return Response.json({ data })
}

export async function PATCH(req, { params }) {
    const { id } = await params;
    const postedData = await req.json()
    console.log(id, postedData);
    const patchData = await dbConnect("practice_data").updateOne({ _id: new ObjectId(id) }, { $set: postedData });

    return Response.json({ patchData })
}