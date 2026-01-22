// "use client";
//
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { usePathname } from "next/navigation"
// import { Fragment, ReactNode } from "react"
// import { Home } from "lucide-react"
//
// export default function PageContainer({ children }: { children: ReactNode }) {
//   const pathname = usePathname()
//   console.log("pathname", pathname);
//   const segments = pathname.split("/").filter(Boolean)
//   console.log("segments", segments);
//
//   return (
//     <main className="my-6 px-4">
//       <Breadcrumb className="mb-5">
//         <BreadcrumbList>
//           <BreadcrumbItem>
//             {segments.length === 0 ? (
//               <BreadcrumbPage>
//                 <Home size={22} />
//               </BreadcrumbPage>
//             ) : (
//               <BreadcrumbLink href="/">
//                 <Home size={22} />
//               </BreadcrumbLink>
//             )}
//           </BreadcrumbItem>
//
//           {segments.length > 0 && <BreadcrumbSeparator />}
//
//           {segments.map((segment, index) => {
//             const href = "/" + segments.slice(0, index + 1).join("/")
//             const isLast = index === segments.length - 1
//             const label =
//               segment.charAt(0).toUpperCase() + segment.slice(1)
//
//             return (
//               <Fragment key={href}>
//                 <BreadcrumbItem>
//                   {isLast ? (
//                     <BreadcrumbPage>{label}</BreadcrumbPage>
//                   ) : (
//                     <BreadcrumbLink href={href}>
//                       {label}
//                     </BreadcrumbLink>
//                   )}
//                 </BreadcrumbItem>
//
//                 {!isLast && <BreadcrumbSeparator />}
//               </Fragment>
//             )
//           })}
//         </BreadcrumbList>
//       </Breadcrumb>
//       {children}
//     </main>
//   )
// }
//
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

export default function PageContainer({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  const showEllipsis = segments.length > 4

  const start = segments.slice(0, segments.length - 2)
  const end = segments.slice(-2)

  return (
    <main className="my-6 px-4">
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

            const href =
              "/" +
              segments
                .slice(0, baseIndex + index + 1)
                .join("/")

            const isLast = index === arr.length - 1

            return (
              <Fragment key={href}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>
                      {formatLabel(segment)}
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

function formatLabel(segment: string) {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
}
