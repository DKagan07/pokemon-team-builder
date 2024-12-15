import Link from "next/link"
// import { Pokemon } from "@/lib/pokemon"

export default function TopBar({
    isLoggedIn,
    page
}: {
    isLoggedIn: boolean,
    page: string,
}) {
    // TODO: need some conditional to see if someone is logged in
    // for now, we'll just have a login button
    // Also, the teams button is there for testing an authenticated endpoint
    // remove when needed
    return (
        <div className="flex w-full p-2">
            <div className="px-2">
                <Link href="/">
                    <button className="border border-black rounded-md px-2">
                        Home
                    </button>
                </Link>
            </div>
            {
                isLoggedIn && page !== "teams" ? (
                    <div className="flex justify-start">
                        <Link href="/teams">
                            <button className="border border-black rounded-md px-2">
                                Teams
                            </button>
                        </Link>
                    </div>
                ) : (
                    <></>
                )
            }
            <div className="flex justify-end w-full">
                <Link href="/signup">
                    <button className="border border-black rounded-md px-2">
                        Sign Up
                    </button>
                </Link>
            </div >
        </div >
    )
}
