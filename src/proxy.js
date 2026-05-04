
// import { headers } from 'next/headers';
// import { NextResponse } from 'next/server';
// import { auth } from './lib/auth'; 

// export async function proxy(request) {
//     try {
//         const session = await auth.api.getSession({
//             headers: await headers()
//         });

//         if (!session) {
            
//             return NextResponse.redirect(new URL('/signin', request.url));
//         }

//         return NextResponse.next();
//     } catch (error) {
        
//         console.error("Proxy Auth Error:", error);
//         return NextResponse.next();
//     }
// }

// export const config = {
//     matcher: [
//         '/profile', 
//         '/all-tiles/:path' 
//     ],
// };



// src/proxy.js
import { NextResponse } from 'next/server';
import { auth } from './lib/auth'; 

export async function proxy(request) {
    try {
       
        const session = await auth.api.getSession({
            headers: request.headers 
        });

        if (!session && (request.nextUrl.pathname === '/profile' || request.nextUrl.pathname === '/all-tiles')) {
            return NextResponse.redirect(new URL('/signin', request.url));
        }

        return NextResponse.next();
    } catch (e) {
        return NextResponse.next();
    }
}