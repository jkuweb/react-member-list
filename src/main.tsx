import React from "react";
import ReactDOM from "react-dom/client";
import { UserProfileProvider } from "@/core/providers/user-profile";
import { MemberEntity } from "./pods/member-list/member-list.vm";
import { App } from "@/app";
import "@/App.css";

interface MembersCountextModel {
  memberList: MemberEntity[];
}

export const MembersContext = React.createContext<MembersCountextModel>(null);

const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [memberList, setMemberList] = React.useState<MemberEntity[]>([]);
  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then(setMemberList);
  }, []);
  return (
    <MembersContext.Provider value={{ memberList  }}>
      {children}
    </MembersContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProfileProvider>
      <MembersProvider>
        <App />
      </MembersProvider>
    </UserProfileProvider>
  </React.StrictMode>
);
