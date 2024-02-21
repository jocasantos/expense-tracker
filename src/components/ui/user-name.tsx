"use client";
import { useUser } from "@clerk/nextjs";

export default function GetUserName() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const firstName = `${user.firstName}`;

  return firstName;
}
