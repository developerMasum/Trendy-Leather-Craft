import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // Import ObjectId from mongodb

export const POST = async (request) => {
  try {
    console.log(request.body);
    const { id } = request.body; // Access the id from the request body

    if (!id) {
      const response = new NextResponse(
        JSON.stringify({
          message: "ID parameter missing in request body",
        }),
        { status: 400 }
      );
      response.headers.set("Content-Type", "application/json");
      return response;
    }

    const db = await DbConnect();
    const categoriesCollection = db.collection("categories");

    const data = await categoriesCollection.findOne({ _id: new ObjectId(id) });

    if (data) {
      const response = new NextResponse(
        JSON.stringify({
          message: "success",
          data: data,
        })
      );
      response.headers.set("Content-Type", "application/json");
      return response;
    } else {
      const response = new NextResponse(
        JSON.stringify({
          message: "Category not found",
        }),
        { status: 404 }
      );
      response.headers.set("Content-Type", "application/json");
      return response;
    }
  } catch (error) {
    console.error(error);
    const response = new NextResponse(
      JSON.stringify({
        message: "Error while fetching data",
      }),
      { status: 500 }
    );
    response.headers.set("Content-Type", "application/json");
    return response;
  }
};
