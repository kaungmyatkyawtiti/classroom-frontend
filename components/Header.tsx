"use client"

import { RiLayoutLeftLine, RiMenuLine } from "@remixicon/react";

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import ModeToggle from "./ModeToggle";
import { useIsMobile } from "@/hooks/useMobile";

export default function Header() {
  const { toggleSidebar } = useSidebar()
  const isMobile = useIsMobile()

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-3 px-2">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          {isMobile ? <RiMenuLine /> : <RiLayoutLeftLine />}
        </Button>
        <Separator orientation="vertical" className="mr-3 h-4" />
        <h2 className="font-semibold hidden sm:block">
          ClassRoom Management
        </h2>

        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
