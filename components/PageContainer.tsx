"use client"

import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation"
import { Fragment, ReactNode } from "react"
import { Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface PageContainerProps {
  children: ReactNode;
  dynamicLabel?: string;
  className?: string;
}

function formatLabel(segment: string) {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function isUUID(segment: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(segment)
}

export default function PageContainer({
  children,
  dynamicLabel,
  className,
}: PageContainerProps) {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  const showEllipsis = segments.length > 4

  const start = segments.slice(0, segments.length - 2)
  const end = segments.slice(-2)

  return (
    <main className={cn("my-6 px-6", className)}>
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          {/* Home */}
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">
                <Home size={20} />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {segments.length > 0 && <BreadcrumbSeparator />}

          {showEllipsis && (
            <>
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      className="h-6 w-6"
                    >
                      <BreadcrumbEllipsis />
                      <span className="sr-only">Toggle breadcrumb</span>
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="start">
                    {start.map((segment, index) => {
                      const href =
                        "/" + segments.slice(0, index + 1).join("/")

                      return (
                        <DropdownMenuItem key={href} asChild>
                          <Link href={href}>
                            {formatLabel(segment)}
                          </Link>
                        </DropdownMenuItem>
                      )
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}

          {(showEllipsis ? end : segments).map((segment, index, arr) => {
            const baseIndex = showEllipsis
              ? segments.length - arr.length
              : 0

            const href = "/" + segments
              .slice(0, baseIndex + index + 1)
              .join("/")

            const isLast = index === arr.length - 1

            return (
              <Fragment key={href}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>
                      {isUUID(segment) && dynamicLabel
                        ? dynamicLabel
                        : formatLabel(segment)}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={href}>
                        {formatLabel(segment)}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>

                {!isLast && <BreadcrumbSeparator />}
              </Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>

      {children}
    </main>
  )
}
