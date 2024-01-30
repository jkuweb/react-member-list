import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router";
import { AppLayout } from "@/layouts";
import { MemberListContainer } from "@/pods/member-list";

export const MemberListScene: React.FC = () => {
  const navigate = useNavigate()

  const handleSelect = (login: string) => {
    navigate(routes.detail(login))
  }
  return (
      <AppLayout>
      <MemberListContainer onSelect={handleSelect}/>
      </AppLayout>
  );
};
