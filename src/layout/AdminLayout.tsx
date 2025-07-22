import React from 'react'
import { Outlet } from 'react-router'

type Props = {}

function AdminLayout({}: Props) {
  return (
    <div><Outlet /></div>
  )
}

export default AdminLayout