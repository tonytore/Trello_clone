import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher([
  '/organization/(.*)',
  '/select-org',
]);

export default clerkMiddleware((auth, req) => {
  if (!auth().userId && isProtectedRoute(req)) {

    // Add custom logic to run before redirecting

    return auth().redirectToSignIn();
  }

  if (auth().userId && !auth().orgId && req.nextUrl.pathname !== '/select-org'){
    const orgSelection = new URL('/select-org',req.url)
    console.log(orgSelection);
    
    return NextResponse.redirect(orgSelection)
  }
},{debug:true});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};