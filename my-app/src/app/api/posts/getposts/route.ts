import { connect } from "@/dpConfig/dpConfig"; // Import your MongoDB connection function

import Post from "@/models/posts";

import { NextRequest ,NextResponse } from "next/server";

connect();
 export async function GET (request: NextRequest){

    try {
        const posts = await Post.find(); // Fetches all posts

        return NextResponse.json({
            success:true,
            data:posts,
        });

    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }