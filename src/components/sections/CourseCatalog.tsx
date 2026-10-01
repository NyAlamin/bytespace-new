import { CategoryPills } from "@/components/ui/CategoryPills";
import { CourseCard } from "@/components/ui/CourseCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ACTIVE_CATEGORY, CATEGORY_ROWS } from "@/data/categories";
import { COURSES } from "@/data/courses";

export function CourseCatalog() {
  return (
    <section
      id="courses"
      aria-labelledby="course-catalog-title"
      className="w-full bg-white pt-[72px]"
    >
      <div className="mx-auto flex w-[1440px] flex-col items-center">
        <SectionHeading
          id="course-catalog-title"
          className="h-[180px]"
          titleClassName="text-[44px]"
          title={
            <>
              Discover Your Passion,
              <br />
              Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div className="mt-[42px]">
          <CategoryPills
            rows={CATEGORY_ROWS}
            activeCategory={ACTIVE_CATEGORY}
          />
        </div>

        <ul className="mt-[77px] grid w-[1199px] grid-cols-[repeat(3,373px)] gap-10">
          {COURSES.map((course) => (
            <li key={course.id}>
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}