"use client"

import { getAurinkoAuthorizationUrl } from "@/lib/aurinko"
import { Button } from "./ui/button"

const LinkAccountButton = () => {
  return (
    <Button
      onClick={async () => {
        const authUrl = await getAurinkoAuthorizationUrl("Google")
        /*         window.location.href = authUrl
         */ console.log(authUrl)
      }}
    >
      Link Account
    </Button>
  )
}

export default LinkAccountButton
