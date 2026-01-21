"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"
import { Fragment, ReactNode } from "react"
import { Home } from "lucide-react"

export default function PageContainer({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  return (
    <main className="my-6 px-4">
      <Breadcrumb className="mb-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            {segments.length === 0 ? (
              <BreadcrumbPage>
                <Home size={22} />
              </BreadcrumbPage>
            ) : (
              <BreadcrumbLink href="/">
                <Home size={22} />
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>

          {segments.length > 0 && <BreadcrumbSeparator />}

          {
            segments.map((segment, index) => {
              const href = "/" + segments.slice(0, index + 1).join("/")
              const isLast = index === segments.length - 1
              const label =
                segment.charAt(0).toUpperCase() + segment.slice(1)

              return (
                <Fragment key={href}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={href}>
                        {label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>

                  {!isLast && <BreadcrumbSeparator />}
                </Fragment>
              )
            })
          }
        </BreadcrumbList>
      </Breadcrumb>
      {children}
    </main>
  )
}
