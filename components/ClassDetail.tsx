import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const ClassDetail = () => {
  // Mock Data
  const classInfo = {
    title: "Python Foundations",
    description: "Intro to Programming focused on Python syntax, control flow, functions, and small projects.",
    spots: 30,
    status: "ACTIVE",
    instructor: {
      name: "Teacher Tom",
      email: "tom@teacher.com",
      initials: "TT"
    },
    department: {
      name: "Electronics & Communication",
      description: "Circuits, signal processing, telecom"
    },
    subject: {
      code: "ECE101",
      name: "Signals",
      description: "Analysis of EC Signals"
    },
    bannerUrl: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&q=80&w=1200"
  };

  return (
    <main className="max-w-6xl mx-auto px-6 md:px-12 my-10">
      <div className="flex items-center justify-end mb-6 gap-2">
        <Button>
          Refresh
        </Button>
        <Button>
          Edit
        </Button>
      </div>

      {/* Banner Section */}
      <div className="relative h-60 md:h-80 w-full overflow-hidden rounded-3xl mb-8 shadow-2xl">
        <img
          src={classInfo.bannerUrl}
          alt="Python Foundations Banner"
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 flex items-center px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {classInfo.title}
          </h1>
        </div>
      </div>

      {/* Content Card */}
      <Card className="p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-10">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              {classInfo.title}
            </h2>
            <p className="text-foreground/80 text-[15px] max-w-2xl leading-relaxed">
              {classInfo.description}
            </p>
          </div>
          <div className="flex items-center gap-3 self-start">
            <span className="text-sm font-medium text-muted-foreground">{classInfo.spots} spots</span>
            <Badge className="bg-emerald-500 font-medium text-white">
              {classInfo.status}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-16 border-t border-white/5 pt-10">
          <div className="space-y-4">
            <h3 className="subtitle">Instructor</h3>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center text-gray-200 font-bold border border-white/10">
                {classInfo.instructor.initials}
              </div>
              <div>
                <p className="text-cyan-600 font-medium hover:underline cursor-pointer">
                  {classInfo.instructor.name}
                </p>
                <p className="text-sm text-foreground/70">{classInfo.instructor.email}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="subtitle">Department</h3>
            <div>
              <p className="text-cyan-600 font-semibold">
                {classInfo.department.name}
              </p>
              <p className="text-sm text-foreground/70 mt-1">
                {classInfo.department.description}
              </p>
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-4">
            <h3 className="subtitle">Subject</h3>
            <div>
              <p className="text-sm mb-1 font-mono tracking-tighter font-semibold">
                Code: {classInfo.subject.code}
              </p>
              <p className="text-cyan-600 font-medium text-lg">
                {classInfo.subject.name}
              </p>
              <p className="text-sm text-foreground/60 mt-1">
                {classInfo.subject.description}
              </p>
            </div>
          </div>

          {/* Join Class Section - From Screenshot 2 */}
          <div className="space-y-4">
            <h3 className="subtitle">Join Class</h3>
            <div className="space-y-3">
              <ol className="text-xs md:text-sm text-foreground/70 space-y-2 list-none p-0">
                <li className="flex gap-2">
                  <span className="text-foreground/80">1.</span> Ask your teacher for the invite code
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground/80">2.</span> Click on "Join Class" button
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground/80">3.</span> Paste the code and click "join"
                </li>
              </ol>
              <Button
                className="w-full mt-4 bg-class-orange hover:bg-class-orange/90 text-white font-semibold h-11">
                Join Class
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default ClassDetail;
