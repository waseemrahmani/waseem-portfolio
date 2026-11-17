import type { Metadata } from "next";
import { Hero } from "@/components/landing/Hero";
import { ExperiencePreview } from "@/components/landing/ExperiencePreview";
import { ProjectPreview } from "@/components/landing/ProjectPreview";
import { TechStack } from "@/components/landing/TechStack";
import { PersonalPreview } from "@/components/landing/PersonalPreview";
import { QuickLinks } from "@/components/landing/QuickLinks";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="site-container home-page">
      <ScrollReveal><Hero /></ScrollReveal>
      <ScrollReveal><ExperiencePreview /></ScrollReveal>
      <ScrollReveal><ProjectPreview /></ScrollReveal>
      <ScrollReveal><TechStack /></ScrollReveal>
      <ScrollReveal><PersonalPreview /></ScrollReveal>
      <ScrollReveal><QuickLinks /></ScrollReveal>
    </div>
  );
}
