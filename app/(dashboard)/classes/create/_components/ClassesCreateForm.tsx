"use client"

import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  subject: z
    .string()
    .min(20, "Description must be at least 20 characters."),
  teacher: z
    .string()
    .min(20, "Description must be at least 20 characters."),
  capacity: z
    .string()
    .min(20, "Description must be at least 20 characters."),
  status: z
    .string()
    .min(20, "Description must be at least 20 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
})

export function ClassesCreateForm() {
  const form = useForm({
    defaultValues: {
      title: "",
      subject: "",
      teacher: "",
      capacity: "",
      status: "",
      description: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log("submit value", value)
    },
  })

  return (
    <Card className="w-full sm:max-w-2xl">
      <CardHeader className="mb-4 text-center">
        <CardTitle className="text-lg font-semibold">Create Class Form</CardTitle>
        <CardDescription>
          Enter the class details and assign it to a department.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="classes-create-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field name="title">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Class Name</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="e.g., Introduction to Computer Science"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            </form.Field>

            <div className="flex gap-4 items-center">
              <form.Field name="subject">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Subject</FieldLabel>

                      <Select
                        name={field.name}
                        value={field.state.value}
                        onValueChange={field.handleChange}
                      >
                        <SelectTrigger
                          id={field.name}
                          aria-invalid={isInvalid}
                        >
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>

                        <SelectContent position="popper">
                          <SelectItem value="math">Mathematics</SelectItem>
                          <SelectItem value="cs">Computer Science</SelectItem>
                        </SelectContent>
                      </Select>

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              </form.Field>

              <form.Field name="teacher">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Teacher</FieldLabel>

                      <Select
                        name={field.name}
                        value={field.state.value}
                        onValueChange={field.handleChange}
                      >
                        <SelectTrigger
                          id={field.name}
                          aria-invalid={isInvalid}
                        >
                          <SelectValue placeholder="Select teacher" />
                        </SelectTrigger>

                        <SelectContent position="popper">
                          <SelectItem value="john">John Doe</SelectItem>
                          <SelectItem value="jane">Jane Smith</SelectItem>
                        </SelectContent>
                      </Select>

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              </form.Field>
            </div>

            <div className="flex gap-4 items-center">
              <form.Field name="capacity">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Capacity</FieldLabel>

                      <Select
                        name={field.name}
                        value={field.state.value}
                        onValueChange={field.handleChange}
                      >
                        <SelectTrigger
                          id={field.name}
                          aria-invalid={isInvalid}
                        >
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>

                        <SelectContent position="popper">
                          <SelectItem value="math">Mathematics</SelectItem>
                          <SelectItem value="cs">Computer Science</SelectItem>
                        </SelectContent>
                      </Select>

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              </form.Field>

              <form.Field name="status">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Status</FieldLabel>

                      <Select
                        name={field.name}
                        value={field.state.value}
                        onValueChange={field.handleChange}
                      >
                        <SelectTrigger
                          id={field.name}
                          aria-invalid={isInvalid}
                        >
                          <SelectValue placeholder="Select teacher" />
                        </SelectTrigger>

                        <SelectContent position="popper">
                          <SelectItem value="john">John Doe</SelectItem>
                          <SelectItem value="jane">Jane Smith</SelectItem>
                        </SelectContent>
                      </Select>

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              </form.Field>
            </div>

            <form.Field name="description">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Brief description about the class."
                        rows={6}
                        className="min-h-24 resize-none"
                        aria-invalid={isInvalid}
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="tabular-nums">
                          {field.state.value.length}/100 characters
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    <FieldDescription>
                      Add a short description about the class, including topics and objectives.
                    </FieldDescription>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            </form.Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal" className="flex justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
          >
            Reset
          </Button>
          <Button
            type="submit"
            form="classes-create-form"
            className="bg-class-orange hover:bg-class-orange/90 text-white"
          >
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
