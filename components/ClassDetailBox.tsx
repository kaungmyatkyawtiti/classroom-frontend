"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card"
import { ClassDetail } from "@/types"

interface ClassDetailProps {
  classInfo: ClassDetail
}

const ClassDetailBox = ({ classInfo }: ClassDetailProps) => {
  return (
    <Card className="pt-0">
      <div className="relative aspect-video w-full">
        <Image
          src="/image.jpg"
          alt={classInfo.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-end px-6 md:px-12 pb-8 md:pb-12">
          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              {classInfo.name}
            </h1>
            <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-2xl line-clamp-2">
              {classInfo.description}
            </p>
          </div>
        </div>
      </div>

      <CardHeader className="mt-4 px-6">
        <div className="flex items-center gap-3">
          <span className="text-[15px] font-medium text-foreground/85">
            {classInfo.capacity} spots
          </span>
          <Badge className="bg-emerald-600 text-white font-medium text-[15px]">
            {classInfo.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-8 px-6">
        <div>
          <h3 className="subtitle mb-4.5">Instructor</h3>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center font-bold border">
              {classInfo.teacher?.name?.[0]}
            </div>
            <div>
              <p className="font-semibold hover:underline cursor-pointer">
                {classInfo.teacher?.name}
              </p>
              <p className="text-sm text-foreground/80">
                {classInfo.teacher?.email}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="subtitle mb-4.5">Department</h3>
          <div className="space-y-1.5">
            <p className="font-semibold">
              {classInfo.department?.name}
            </p>
            <p className="text-sm text-foreground/80">
              {classInfo.department?.description}
            </p>
          </div>
        </div>

        <div>
          <h3 className="subtitle mb-4.5">Subject</h3>
          <div className="space-y-1.5">
            <p className="text-sm font-mono font-semibold text-emerald-600">
              Code: {classInfo.subject?.code}
            </p>
            <p className="text-sm font-semibold">
              {classInfo.subject?.name}
            </p>
            <p className="text-sm text-foreground/80">
              {classInfo.subject?.description}
            </p>
          </div>
        </div>

        <div>
          <h3 className="subtitle mb-4.5">Join Class</h3>
          <ol className="list-decimal list-inside space-y-1.5 text-sm text-foreground/80">
            <li>Ask your teacher for the invite code</li>
            <li>Click the “Join Class” button</li>
            <li>Paste the code and confirm</li>
          </ol>

          <Button className="mt-5 bg-class-orange hover:bg-class-orange/90 text-white">
            Join Class
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ClassDetailBox
