import { notFound } from "next/navigation";
import { fetchUserById } from "@/lib/api";
import UserDetails from "@/components/user-details";

interface UserPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params;
  const userId = Number.parseInt(id);

  if (isNaN(userId)) {
    notFound();
  }

  const result = await fetchUserById(userId);

  if (result.error || !result.data) {
    notFound();
  }

  return <UserDetails user={result.data} />;
}

export async function generateStaticParams() {
  // Generate static params for users 1-10 (JSONPlaceholder has 10 users)
  return Array.from({ length: 10 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}
