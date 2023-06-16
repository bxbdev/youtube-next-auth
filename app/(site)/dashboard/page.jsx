'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const dashboard = () => {
    const {data: session } = useSession()
    const route = useRouter()
  return (
    <div>
        <h1>Dashboard</h1>
        <p>Hi {session?.user?.email}</p>

        <button onClick={() => signOut({ callbackUrl: "/"})}>Sign out</button>
    </div>
  )
}

export default dashboard