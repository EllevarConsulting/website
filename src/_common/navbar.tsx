import Link from "next/link"
import { Button } from "./button"

export const NavBar = () => {
  return (
    <div className="sticky flex flex-row w-full justify-between p-6 bg-base">
      <Link href="/">
        <h1 className="pb-0 font-[Canela-Regular] text-4xl text-primary font-bold">Ellevar</h1>
      </Link>
      {/* <div className="flex flex-row gap-4">
        <Link href="/contact">
          <Button className="hover:bg-secondary hover:text-white">Contact</Button>
        </Link>
      </div> */}
    </div>
  )
}