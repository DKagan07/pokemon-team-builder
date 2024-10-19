"use client"

// TODO: not too sure if this is how it's done

export default function ErrorBoundary({ error }: { error: Error }) {
    if (error === undefined) {
        return <></>
    }
    return <div>{error.message}</div>
}
