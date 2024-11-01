import { useRouter } from "next/router"
import { useState } from "react"

export default function Home() {
    const router = useRouter()

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [validatedPw, setValidatedPw] = useState<string>("")

    // Regexes to validate passwords
    const lower = /[a-z]/;
    const upper = /[A-Z]/;
    const special = /[!@#$%^&*(),.?":{}|<>]/;
    const number = /\d/;

    // validatePw is used for easy checking for button disable-ness
    function validatePw(password: string, validatedPw: string): boolean {
        return password === validatedPw && password !== "" && validatedPw !== ""
    }

    // validateCreds validates:
    // 1. the username is populated
    // 2. the password matches the validated password
    // 3. it is <40 characters (for hashing purposes)
    function validateCreds(username: string, password: string, validatedPw: string) {
        if (username === "") {
            throw new Error("username needs to be filled out")
        }

        if (password !== validatedPw) {
            throw new Error("passwords do not match")
        }

        if (password.length > 40) {
            throw new Error("password too long")
        }

        if (lower.test(password) && upper.test(password) && special.test(password) && number.test(password) && password.length > 7) {
            console.log("yes, password works")
        } else {
            throw new Error("password not valid")
        }
    }

    // submitSignUpCreds validates the credentials and issues a POST request to
    // the backend to store the information in the db
    async function submitSignUpCreds(username: string, password: string, validatedPw: string) {
        // need to validate username and pw
        validateCreds(username, password, validatedPw)

        const url = `http://localhost:3001/users/signup`
        console.log("url the submit signup creds request is going: ", url)

        const postOptions: RequestInit = {
            method: "POST",
            // credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        }

        const response = await fetch(url, postOptions)


        // Do I need this?
        // const data = await response.json()
        // console.log({ data })

        // If the response of this call is 200s, we know it's a successful
        // signup, and we can store the information somewhere, and redirect to
        // the homepage
        // The getServerSideProps on the homepage should pick up the cookie and
        // set up the team that way
        if (response.status < 299) {
            console.log("good response")

            router.push("/")
        }

    }

    return (
        <div>
            <div className="flex justify-center h-full">
                <form id="signup-form" className="flex flex-col border border-black m-4 pr-2 rounded-lg justify-items-center align-middle w-[50%]">
                    <div className="flex justify-center align-middle h-[50px]">
                        <p className="self-center w-auto h-auto font-semibold text-xl">Sign Up</p>
                    </div>
                    <div className="p-2">
                        <label htmlFor="username" className="w-full indent-2">Username</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Ash-Ketchum92"
                            minLength={2}
                            maxLength={30}
                            className="placeholder:italic placeholder:text-gray-400
                            required border border-gray-300 rounded-md w-full h-100% m-1 indent-2
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "
                        />
                    </div>
                    <div className="p-2">
                        <label htmlFor="password" className="w-full indent-2 pt-3">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            minLength={2}
                            maxLength={30}
                            placeholder="Strong-password-here"
                            className="placeholder:italic placeholder:text-gray-400
                        required border border-gray-300 rounded-md w-full h-100% m-1 indent-2
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "
                        />
                    </div>
                    <div className="pl-10">
                        <p className={`${upper.test(password) ? "text-green-500" : "text-red-500"} text-xs p-[1px]`}>Contains Cap</p>
                        <p className={`${lower.test(password) ? "text-green-500" : "text-red-500"} text-xs p-[1px]`}> Contains Lower</p>
                        <p className={`${special.test(password) ? "text-green-500" : "text-red-500"} text-xs p-[1px]`}>Contains Special</p>
                        <p className={`${number.test(password) ? "text-green-500" : "text-red-500"} text-xs p-[1px]`}>Contains Num</p>
                        <p className={`${password.length > 7 ? "text-green-500" : "text-red-500"} text-xs p-[1px]`}>Is at least 8 chars (max length 40)</p>
                    </div>
                    <div className="p-2">
                        <label htmlFor="password-validation" className="w-full indent-2 pt-3">Validate Password</label>
                        <input
                            id="password-validation"
                            type="password"
                            name="password-validation"
                            onChange={(e) => setValidatedPw(e.target.value)}
                            minLength={2}
                            maxLength={30}
                            placeholder="Validate Password"
                            className="placeholder:italic placeholder:text-gray-400 
                            required border border-gray-300 rounded-md w-full h-100% m-1 indent-2
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"

                        />
                    </div>
                    <div className="px-2 py-3">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                submitSignUpCreds(username, password, validatedPw)
                            }}
                            className="bg-slate-300 hover:bg-slate-400 disabled:bg-slate-200 rounded-lg h-100% font-semibold w-full py-1 disabled:hover:cursor-not-allowed"
                            disabled={!validatePw(password, validatedPw)}

                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div >
        </div >
    )
}
