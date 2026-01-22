import { ClassesCreateForm } from "./_components/ClassesCreateForm";

export default function CreatePage() {
  return (
    <div>
      <h2 className="page-title">Create a Class</h2>
      <p className="mt-2 text-foreground/85 text-[15px]">Provide the required information below to add a class.</p>
      <div className="flex justify-center my-10">
        <ClassesCreateForm />
      </div>
    </div>
  )
}

