"use client"

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

import {
  Home,
  BookOpen,
  Building2,
  Users,
  List,
  Presentation,
} from "lucide-react"

export const links = [
  {
    title: "Home",
    href: "/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: "Subjects",
    href: "/subjects",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Departments",
    href: "/departments",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    title: "Faculty",
    href: "/faculty",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Enrollments",
    href: "/enrollments",
    icon: <List className="h-5 w-5" />,
  },
  {
    title: "Classes",
    href: "/classes",
    icon: <Presentation className="h-5 w-5" />,
  },
]

export default function NavPanel() {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarMenu>
        {links.map((item) => {
          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`)

          return (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                size="lg"
                asChild
                tooltip={item.title}
                className={cn(
                  isActive &&
                  "bg-class-orange hover:bg-class-orange/90 text-white hover:text-white font-medium shadow-lg"
                )}
              >
                <Link href={item.href}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
