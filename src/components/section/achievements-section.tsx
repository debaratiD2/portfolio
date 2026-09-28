/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { ExternalLinkIcon, FileTextIcon } from "lucide-react";
import Link from "next/link";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  pdf?: string;
  logo?: string;
};

const certifications: readonly Certification[] = DATA.certifications;

const DELAY = 0.04;

const pillClass =
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium hover:bg-primary hover:text-background transition-colors";

export default function AchievementsSection() {
  return (
    <div className="flex flex-col gap-y-10">
      <BlurFade delay={DELAY}>
        <h2 className="text-xl font-bold">Learning & Achievements</h2>
      </BlurFade>

      {/* Certifications */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Courses & Certifications
        </h3>

        {certifications.map((c, i) => (
          <BlurFade key={c.title} delay={DELAY * 2 + i * 0.05}>
            <div className="flex gap-4 rounded-xl border p-4 bg-card">
              {c.logo && (
                <img
                  src={c.logo}
                  alt={c.issuer}
                  className="size-12 rounded-lg border object-contain p-1 flex-none"
                />
              )}

              <div className="flex-1 min-w-0">
                <div className="flex justify-between gap-4">
                  <p className="font-semibold leading-snug">{c.title}</p>
                  <span className="text-xs tabular-nums text-muted-foreground whitespace-nowrap">
                    {c.date}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">{c.issuer}</p>

                {c.credentialId && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Credential ID:{" "}
                    <span className="font-mono">{c.credentialId}</span>
                  </p>
                )}

                {(c.pdf || c.credentialUrl) && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {c.credentialUrl && (
                      <Link
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={pillClass}
                      >
                        Show credential <ExternalLinkIcon className="size-3" />
                      </Link>
                    )}

                    {c.pdf && (
                      <Link
                        href={c.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={pillClass}
                      >
                        <FileTextIcon className="size-3" /> View certificate
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Awards */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Awards & Honors
        </h3>
        {DATA.awards.map((a) => (
          <div key={a.title} className="rounded-xl border p-4 bg-card">
            <p className="font-semibold">🏅 {a.title}</p>
            <p className="text-sm text-muted-foreground">{a.description}</p>
          </div>
        ))}
      </div>

      {/* Activities */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Affiliations & Activities
        </h3>
        {DATA.activities.map((a) => (
          <div key={a.org} className="flex justify-between gap-4 text-sm">
            <p>
              <span className="font-semibold">{a.org}</span> ·{" "}
              <span className="text-muted-foreground">{a.role}</span>
            </p>
            <span className="text-xs tabular-nums text-muted-foreground whitespace-nowrap">
              {a.date}
            </span>
          </div>
        ))}
      </div>

      {/* Languages / learning */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Currently Learning
        </h3>
        {DATA.learning.map((l) => (
          <Link
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between rounded-xl border p-4 bg-card hover:shadow-md transition-all"
          >
            <div>
              <p className="font-semibold">
                {l.name}{" "}
                <span className="text-muted-foreground font-normal">
                  on {l.platform}
                </span>
              </p>
              <p className="text-sm text-muted-foreground">{l.stat}</p>
            </div>
            {l.streak && <span className="text-sm">🔥 {l.streak}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}