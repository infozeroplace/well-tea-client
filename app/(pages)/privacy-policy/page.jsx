import PrivacyPolicy from "./_components/page-contents";
import { privacyPolicyMetadata } from "@/data/staticMetaData";

export async function generateMetadata() {
  return privacyPolicyMetadata;
}

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
