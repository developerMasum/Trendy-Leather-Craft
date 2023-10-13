import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export const middleware = async (request) => {
  const { pathname } = new URL(request.url);

  const isPath = (path) => pathname.startsWith(path);

  try {
    let token = request.cookies.get("jwt-token")?.value;
    console.log('token', token);
    if (!token) {
      throw new Error("Token not found in cookies");
    }

    // Check if the token starts with "Bearer "
    if (!token.startsWith("Bearer ")) {
      throw new Error("Invalid token format");
    }

    const jwtToken = token.substring(7); // Remove "Bearer " prefix
    const secret = process.env.jwt_secret;

    // Verify the JWT token
    await jwtVerify(jwtToken, secret);

    if (isPath("/login") || isPath("/register")) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    if (isPath("/login") || isPath("/register")) {
      return NextResponse.next();
    }

    return NextResponse.redirect(
      new URL(`/login?redirectUrl=${pathname}`, request.url)
    );
  }
};

// See "Matching Paths" below to learn more
export const config = {
  // Adjust the paths as needed
  matcher: [
    "/profile/:path*",
    "/dashboard/:path*",
    "/login/:path*",
    "/register/:path*",
  ],
};
