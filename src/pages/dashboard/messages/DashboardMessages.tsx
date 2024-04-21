import { useLayoutEffect } from "react";
import { useHeading } from "../components/layout/DashboardWrapper";

export default function DashboardMessages() {
  const { setHeading } = useHeading();

  useLayoutEffect(() => {
    setHeading("Messages");
  }, [setHeading]);

  return (
    <section>
      <div>
        <h1>Messages</h1>
      </div>
    </section>
  );
}
