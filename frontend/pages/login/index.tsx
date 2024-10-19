import { useState } from "react"

export default function Home() {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [validatedPw, setValidatedPw] = useState<string>("")

    function validatePw(password: string, validatedPw: string): boolean {
        return password === validatedPw && password !== "" && validatedPw !== ""
    }

    async function submitLoginCreds(username: string, password: string, validatedPw: string) {
        if (password !== validatedPw) {
            throw new Error("passwords do not match")
        }

        if (password.length > 72) {
            throw new Error("password too long")
        }
        const url = `http://localhost:3001/login`
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ username: username, password: password })
        })

        const data = await response.json()
        console.log({ data })
    }

    console.log("is pw the same as validatedpw? ", validatePw(password, validatedPw))

    return (
        <div>
            <p>Please login</p>
            <div className="flex justify-center">
                <form id="login-form" className="flex flex-col justify-items-center align-middle w-[50%]">
                    <input
                        id="username"
                        type="text"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="placeholder:italic placeholder:text-gray-400 placeholder:p-1
                        required border border-gray-300 rounded-md w-full h-100% m-1 indent-2
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "
                    />
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="placeholder:italic placeholder:text-gray-400 placeholder:p-1
                        required border border-gray-300 rounded-md w-full h-100% m-1 indent-2
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "
                    />
                    <input
                        id="password-validation"
                        type="password"
                        name="password-validation"
                        onChange={(e) => setValidatedPw(e.target.value)}
                        placeholder="Validate Password"
                        className="placeholder:italic placeholder:text-gray-400 placeholder:p-1
                        required border border-gray-300 rounded-md w-full h-100% m-1 indent-2
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "

                    />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            submitLoginCreds(username, password, validatedPw)
                        }}
                        className="bg-green-300 hover:bg-green-500 disabled:bg-red-200 rounded-lg h-100% font-semibold w-full"
                        disabled={!validatePw(password, validatedPw)}
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    )
}
