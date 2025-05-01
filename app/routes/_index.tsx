import type { MetaFunction } from "@remix-run/node";
import { LandingPage } from "~/components/templates/LandingPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Remijs | coming-soon-landing" },
    { name: "description", content: "Remijs | coming-soon-landing" },
  ];
};

export default function Index() {
  return (
    <LandingPage />
  );
}
