import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export default withMiddlewareAuthRequired();

// any authenticated routes go here
export const config = {
  matcher: '/profile'
};