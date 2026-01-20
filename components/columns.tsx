"use client"

import {
  type ColumnDef,
} from "@tanstack/react-table"
import { EllipsisVertical } from "lucide-react"
import { format } from "date-fns";
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Subject } from "@/types"

export const columns: ColumnDef<Subject>[] = [
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
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "code",
    header: ({ table }) => (
      <h2 className="mx-5">Code</h2>
    ),
    cell: ({ row }) => (
      <div className="mx-5">
        {row.getValue("code")}
      </div>
    ),
  },
  {
    accessorKey: "department",
    header: ({ table }) => (
      <h2 className="mx-5">Department</h2>
    ),
    cell: ({ row }) => (
      <div className="mx-5">
        {row.getValue("department")}
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("description")}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: ({ table }) => (
      <h2 className="mx-5">Created At</h2>
    ),
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as string | Date;
      const formated = format(new Date(date), "dd MMM yyyy");

      return (
        <div className="mx-5">
          {formated}
        </div>
      )
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon-sm"
              variant="ghost"
            >
              <EllipsisVertical size={18} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
