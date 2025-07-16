//NextAuth function for fetching user session
import { getServerSession } from "next-auth";
// Custom component to allow the user to sign out
import SignOutButton from "@/components/SignOutButton";
// Our authOptions
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
  // Fetching the user session
  const session = await getServerSession(authOptions);

  //   If the user is not authenticated
  if (!session) {
    return <p>You need to sign in to access this page.</p>;
  }

  return (
    <div>
      <p>Welcome, {session.user.email}</p>
      <SignOutButton />
    </div>
  );
}
