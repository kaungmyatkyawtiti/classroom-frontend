"use client"

import {
  Select, SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import * as React from "react"
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table"
import { Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DEPARTMENT_OPTIONS, MOCK_SUBJECTS } from "@/constants/dummy"
import DataTable from "@/components/DataTable"
import { subjectColumns } from "@/components/subject-columns"

export default function SubjectPage() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data: MOCK_SUBJECTS,
    columns: subjectColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="space-y-1 mb-6">
        <h2 className="page-title">Subjects</h2>
        <p className="text-foreground/85 text-[15px]">Manage your classes, subjects and teachers.</p>
      </div>
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between py-4 gap-3">
        <div className="relative max-w-sm w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="pl-9"
          />
        </div>
        <div className="flex items-center gap-2">
          <Select
            onValueChange={(value) => {
              if (value === "all") {
                table.getColumn("department")?.setFilterValue(undefined)
              } else {
                table.getColumn("department")?.setFilterValue(value)
              }
            }}
          >
            <SelectTrigger className="min-w-35">
              <SelectValue placeholder="Filter departments" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="all">
                All Departments
              </SelectItem>
              {
                DEPARTMENT_OPTIONS.map(dpt => (
                  <SelectItem
                    key={dpt.value}
                    value={dpt.value}
                  >
                    {dpt.label}
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
          <Button
            size="sm"
            className="bg-emerald-600 hover:bg-emerald-600/90 text-white"
          >
            <Plus size={18} />
            Add
          </Button>
        </div>
      </div>

      <DataTable table={table} columnsLength={subjectColumns.length} />

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
