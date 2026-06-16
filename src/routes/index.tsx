import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Brands } from "@/components/site/Brands";
import { About } from "@/components/site/About";
import { Businesses } from "@/components/site/Businesses";
import { Numbers } from "@/components/site/Numbers";
import { HowWeOperate } from "@/components/site/HowWeOperate";
import { Why } from "@/components/site/Why";
import { Segments } from "@/components/site/Segments";
import { WorkWithUs } from "@/components/site/WorkWithUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Equip Group — Professional kitchen equipment & B2B foodservice software" },
      {
        name: "description",
        content:
          "European group company operating across professional kitchen equipment distribution and B2B foodservice software. Serving dealers, designers and manufacturers since 1990.",
      },
      { property: "og:title", content: "Equip Group" },
      {
        property: "og:description",
        content:
          "European group operating in professional kitchen equipment distribution and B2B foodservice software.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Businesses />
      <Numbers />
      <Brands />
      <HowWeOperate />
      <Why />
      <Segments />
      <WorkWithUs />
      <Contact />
      <Footer />
    </main>
  );
}
