import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    
    const db = await DbConnect();
    const categoriesCollection = await db.collection('categories');
    const data= await categoriesCollection.find({}).toArray();
    console.log(data);
    const res = new NextResponse(
        JSON.stringify({
          message: "success",
          data: data  
        })
      );

      return res
  
};

// export default (req, res) => {
//     if (req.method === 'GET') {
//       // Handle GET request
//       res.status(200).json({ message: 'This is a GET request to the API endpoint' });
//     } else if (req.method === 'POST') {
//       // Handle POST request
//       const data = req.body;
//       res.status(200).json({ message: 'This is a POST request to the API endpoint', data });
//     } else {
//       res.status(405).end();
//     }
//   };