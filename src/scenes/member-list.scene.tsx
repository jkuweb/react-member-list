import React from "react";
import { AppLayout } from "@/layouts";
import { MemberListContainer } from "@/pods/member-list";
import { MemberDetailContainer } from "@/pods/member-detail";

export const MemberListScene: React.FC = () => {
 const [selectedLogin, setSelectedLogin] = React.useState<string>('')

  const handleSelect = (login: string) => {
    setSelectedLogin(login)
  }
  return (
      <AppLayout>
        <div style={{display:"flex"}}>
      <MemberListContainer onSelect={handleSelect}/>
        {selectedLogin && (
          <div>
            <MemberDetailContainer login={selectedLogin}/>
          </div>
        )}

        </div>
      </AppLayout>
  );
};
