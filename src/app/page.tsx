
import { headers } from "next/headers";
import { Status, StatusLabel } from "./components/status-label";
import { AddCompanyButton } from "./components/add-company-button";

export default function Home() {

  return (
    <main>
      <AddCompanyButton/>

    </main>
  );
}
