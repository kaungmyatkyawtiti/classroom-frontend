"use client"

import Image from "next/image"
import {
  type ColumnDef,
} from "@tanstack/react-table"
import { EllipsisVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ClassDetail } from "@/types"
import { Badge } from "./ui/badge";
import ClassActionsCell from "./ClassActionsCell"

export const classColumns: ColumnDef<ClassDetail>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="mx-3"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="mx-3"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "bannerUrl",
    header: "Banner",
    cell: ({ row }) => {
      const bannerUrl = row.original.bannerUrl

      return (
        <div className="relative h-14 w-24 overflow-hidden rounded-md bg-muted">
          {/* {bannerUrl ? ( */}
          {/*   <Image */}
          {/*     src={bannerUrl} */}
          {/*     alt={row.original.name} */}
          {/*     fill */}
          {/*     className="object-cover" */}
          {/*     sizes="96px" */}
          {/*   /> */}
          {/* ) : ( */}
          {/*   <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground"> */}
          {/*     No image */}
          {/*   </div> */}
          {/* )} */}
          Hello
        </div>
      )
    },
  },
  {
    accessorKey: "name",
    header: "Class Name",
    cell: ({ row }) => (
      <div className="">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    id: "subjectName",
    accessorFn: (row) => row.subject?.name ?? "",
    filterFn: "includesString",
    header: "Subject",
    cell: ({ row }) => {
      const subject = row.original.subject;

      return (
        <div className="">
          {subject ? subject.name : "-"}
        </div>
      )
    },
  },

  {
    accessorKey: "status",
    header: ({ table }) => (
      <h2 className="mx-3">Status</h2>
    ),
    cell: ({ row }) => (
      <Badge className="mx-3 bg-class-orange text-white">
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    accessorKey: "teacher",
    header: "Teacher",
    cell: ({ row }) => {
      const teacher = row.original.teacher;

      return (
        <div className="capitalize">
          {teacher ? teacher.name : "-"}
        </div>
      )
    },
  },
  {
    accessorKey: "capacity",
    header: "Capacity",
    cell: ({ row }) => {
      return (
        <div className="ml-3">
          {row.getValue("capacity")}
        </div>
      )
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => (
      <ClassActionsCell id={row.original.id} />
    ),
  },
]
