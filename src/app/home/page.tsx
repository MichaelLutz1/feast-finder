"use client"
import React from 'react'
import { useAuth } from '@/context/AuthContext'
import { Button } from "@/components/ui/button"

export default function Page() {
  const { user, logout } = useAuth()
  return (
    <>
      <div>Testing page</div>
      <div>{user?.email} {user?.displayName}</div>
      <Button onClick={() => logout()}>Sign out</Button>
    </>

  )
}

