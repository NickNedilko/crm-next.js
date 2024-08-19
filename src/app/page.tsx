
import { headers } from "next/headers";
import { Status, StatusLabel } from "./components/status-label";
import { AddCompanyButton } from "./components/add-company-button";
import MagicButton from "./components/magic-button";

export default function Home() {

  return (
    <main>
      <AddCompanyButton/>
      <MagicButton/>
    </main>
  );
}
