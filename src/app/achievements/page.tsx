import BlurFade from "@/components/magicui/blur-fade";
import AchievementsSection from "@/components/section/achievements-section";

export const metadata = {
  title: "Achievements",
  description: "Courses, certifications, awards and activities.",
};

export default function AchievementsPage() {
  return (
    <main className="flex flex-col min-h-dvh pb-24">
      <BlurFade delay={0.04}>
        <AchievementsSection />
      </BlurFade>
    </main>
  );
}