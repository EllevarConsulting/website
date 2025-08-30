import Image from "next/image"
import Link from "next/link"
import { Button } from "./button"

export const NavBar = () => {
  return (
    <div className="sticky flex flex-row w-full justify-between p-6">
      <Link href="/">
        <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
      </Link>
      <div className="flex flex-row gap-4">
        <Link href="/about">
          <Button>About</Button>
        </Link>
        <Link href="/contact">
          <Button>Contact</Button>
        </Link>
      </div>
    </div>
  )
}