import { AppSidebar } from "@/components/app-sidebar"
import PageContainer from "@/components/PageContainer"
import { SiteHeader } from "@/components/SiteHeader"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { ReactNode } from "react"

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 13)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <PageContainer>
              {children}
            </PageContainer>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
