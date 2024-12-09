import Link from "next/link"
// import { Pokemon } from "@/lib/pokemon"

export default function TopBar() {
    // TODO: need some conditional to see if someone is logged in
    // for now, we'll just have a login button
    // Also, the teams button is there for testing an authenticated endpoint
    // remove when needed
    return (
        <div>
            <div>
                <button>
                    Teams
                </button>
            </div>
            <div className="flex justify-end w-full">
                <Link href="/signup">
                    <button className="border border-black rounded-md px-2">
                        Sign Up
                    </button>
                </Link>
            </div >
        </div>
    )
}
