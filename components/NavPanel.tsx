"use client"

import {
  Collapsible,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link";
import {
  RiBookOpenLine,
  RiBuildingLine,
  RiTeamLine,
  RiPresentationLine,
  RiListView,
  RiHome3Fill,
} from "@remixicon/react"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const links = [
  {
    title: "Home",
    href: "/",
    icon: <RiHome3Fill />,
  },
  {
    title: "Subjects",
    href: "/subjects",
    icon: <RiBookOpenLine />,
  },
  {
    title: "Departments",
    href: "/departments",
    icon: <RiBuildingLine />,
  },
  {
    title: "Faculty",
    href: "/faculty",
    icon: <RiTeamLine />,
  },
  {
    title: "Enrollments",
    href: "/enrollments",
    icon: <RiListView />,
  },
  {
    title: "Classes",
    href: "/classes",
    icon: <RiPresentationLine />,
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
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={isActive}
            >
              <SidebarMenuItem>
                <SidebarMenuButton
                  size="lg"
                  asChild
                  tooltip={item.title}
                  className={cn(
                    isActive && "bg-primary hover:bg-primary/90 text-white hover:text-white font-medium shadow-lg"
                  )}
                >
                  <Link href={item.href}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
