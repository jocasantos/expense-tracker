import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export default authMiddleware({
    publicRoutes: ["/"],
    debug: true,

  afterAuth (auth, req, evt)  {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
        return redirectToSignIn({ returnBackUrl: req.url });
      }
      
    // Handle users who are authenticated
    if (auth.userId && auth.isPublicRoute && req.nextUrl.pathname === "/") {
        const painel = new URL ("/painel", req.url)
      return NextResponse.redirect(painel);
    }

    // If the user is logged in and trying to access a protected route, allow them to access route
    if (auth.userId && !auth.isPublicRoute) {
        return NextResponse.next();
    }

    // Allow users visiting public routes to access them
    return NextResponse.next();
}

});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  };

