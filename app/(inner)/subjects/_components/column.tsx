"use client"

import { format } from "date-fns";
import { ColumnDef } from "@tanstack/react-table";
import { Subject } from "@/types";

export const subjectColumns: ColumnDef<Subject>[] = [
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "name",
    header: "Subject Name",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="max-w-[300px] overflow-x-auto whitespace-nowrap">
        {row.original.description}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => (
      <div>
        {format(new Date(row.original.createdAt), "dd MMM yyyy")}
      </div>
    )
  },
];
