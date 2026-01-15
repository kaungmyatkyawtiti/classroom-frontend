import AppSidebar from "@/components/AppSidebar"
import Header from "@/components/Header"
import PageContainer from "@/components/PageTitle"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { ReactNode } from "react"

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <Header />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <PageContainer>
              {children}
            </PageContainer>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
