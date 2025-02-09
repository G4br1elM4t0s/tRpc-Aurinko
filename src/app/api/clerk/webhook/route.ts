// /api/clerk/webhook

import { db } from "@/server/db";


export const POST = async (req: Request) => {
  const { data } = await req.json();

  const clerkUser = {
    emailAddress: data.email_addresses[0].email_address,
    firstName: data.first_name,
    lastName: data.last_name,
    imageUrl: data.image_url,
    id: data.id
  }

  await db.user.create({
    data:{
      ...clerkUser
    }
  })

  return new Response("webhook received",{
    status: 200
  })
}
