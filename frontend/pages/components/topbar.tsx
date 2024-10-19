import Link from "next/link"

export function TopBar() {
    // need some conditional to see if someone is logged in
    // for now, we'll just have a login button
    return (
        <div className="flex justify-end w-full">
            <Link href="/login">
                <button className="border border-black rounded-md px-2">
                    Log In
                </button>
            </Link>
        </div >
    )
}
