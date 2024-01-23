"use client";

import { useUser } from "@clerk/nextjs";

const Edit = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(user);
  return <div className="ml-64">Edit</div>;
};

export default Edit;
