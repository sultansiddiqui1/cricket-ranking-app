import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // checking if the user already has an account:
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "user not found" }), {
        status: 401,
      });
    }

    if (password !== user.password) {
      return new Response(JSON.stringify({ error: "invalid credentials" }), {
        status: 401,
      });
    }
    //else return success:
    return new Response(
      JSON.stringify({
        message: "Login succesful",
        user: { email: user.email, paid: user.paid },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("login error", error);
    return new Response(JSON.stringify({ error: "internal server error" }));
  }
}
