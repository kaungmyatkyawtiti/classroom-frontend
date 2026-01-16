"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DEPARTMENT_OPTIONS } from "@/constants";
import { RiAddLine, RiSearchLine } from "@remixicon/react";
import { useState } from "react";
import { DataTable } from "./_components/data-table";
import { subjectColumns } from "./_components/column";
import { MOCK_SUBJECTS } from "@/constants/dummy";

export default function SubjectPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  return (
    <div className="mt-6 space-y-5">
      <div className="space-y-2">
        <h2 className="page-title">Subjects</h2>
        <p className="text-sm text-foreground/80">
          Manage subjects and quickly filter by department.
        </p>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-lg">
          <RiSearchLine
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search subjects..."
            className="pl-10"
          />
        </div>

        <div className="flex gap-2">
          <Select
            value={selectedDepartment}
            onValueChange={setSelectedDepartment}
          >
            <SelectTrigger
              size="sm"
            >
              <SelectValue placeholder="All departments" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {
                DEPARTMENT_OPTIONS.map(dp => (
                  <SelectItem
                    key={dp.value}
                    value={dp.value}
                  >
                    {dp.label}
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>

          <Button
            size="sm"
          >
            <RiAddLine size={18} />
            Create
          </Button>
        </div>
      </div>

      <DataTable columns={subjectColumns} data={MOCK_SUBJECTS} />
    </div>
  );
}
