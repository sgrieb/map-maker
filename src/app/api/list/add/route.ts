import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export const GET = withApiAuthRequired(async function myApiRoute(req) {
  //  const res = new NextResponse();
  // const { user } = await getSession(req, res);
  // return Response.json({ protected: 'My Secret', id: user.sub }, res);
  return Response.json({ data: 'test' });
});