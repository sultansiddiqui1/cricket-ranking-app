import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const alreadyUser = await prisma.users.findUnique({ where: { email } });
    if (alreadyUser) {
      return new Response(JSON.stringify({ error: "user already exists" }), {
        status: 400,
      });
    }
    //else creating the new user:
    const newUser = await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });
    return new Response(
      JSON.stringify(
        { message: "User created succesfully", user: newUser },
        { status: 201 }
      )
    );
  } catch (error) {
    console.error("signup error", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
