import React from "react";
import { AppLayout } from "@/layouts";
import { MemberListContainer } from "@/pods/member-list";

export const MemberListScene: React.FC = () => {

  return (
      <AppLayout>
      <MemberListContainer/>
      </AppLayout>
  );
};
