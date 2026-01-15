"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DEPARTMENT_OPTIONS } from "@/constants";
import { RiAddLine } from "@remixicon/react";
import { useState } from "react";

export default function SubjectPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  return (
    <div className="mt-5 space-y-4">
      <h2 className="page-title">Subjects</h2>

      <div
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-5"
      >
        <p>Quick access to essential metrics and management tools.</p>
        <div className="flex flex-col md:flex-row gap-3">
          <Input
            placeholder="Search by name..."
          />

          <div className="flex gap-2 w-full sm:w-auto">
            <Select
              value={selectedDepartment} onValueChange={setSelectedDepartment}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">
                  All Departments
                </SelectItem>
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

            <Button>
              <RiAddLine size={18} />
              Create
            </Button>

          </div>
        </div>
      </div>
    </div>
  )
}

