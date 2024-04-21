import { useLayoutEffect } from "react";
import { useHeading } from "../components/layout/DashboardWrapper";

export default function DashboardHome() {
  const { setHeading } = useHeading();

  useLayoutEffect(() => {
    setHeading("Dashboard");
  }, [setHeading]);

  return (
    <section>
      <div>
        <h1>Dashboard</h1>
      </div>
    </section>
  );
}
