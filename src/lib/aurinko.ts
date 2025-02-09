"use server"
import { auth } from "@clerk/nextjs/server"
import { cookies } from "next/headers"

export const getAurinkoAuthorizationUrl = async (
  serviceType: "Google" | "Office365"
) => {
  const { userId } = await auth()
  if (!userId) throw new Error("User not found")

  const params = new URLSearchParams({
    clientId: process.env.AURINKO_CLIENT_ID as string,
    serviceType,
    scopes: "Mail.Read Mail.ReadWrite Mail.Send Mail.Drafts Mail.All",
    responseType: "code",
    returnUrl: `${process.env.NEXT_PUBLIC_URL}/api/aurinko/callback`
  })

  return `https://api.aurinko.io/v1/auth/authorize?${params.toString()}`
}
