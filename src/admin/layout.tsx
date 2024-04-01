import { ReactNode } from "react"
import { Nav, NavLink } from "@/components/nav"}

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/users">Customers</NavLink>
        <NavLink href="/admin/orders">Sales</NavLink>
      </Nav>
      <div>{children}</div>
    </>
  )
}