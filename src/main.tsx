import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/app";
import "@/App.css";
import { UserProfileProvider } from "@/core/providers/user-profile";

interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

interface MembersCountextModel {
  memberList: MemberEntity[];
  clear: () => void;
}

export const MembersContext = React.createContext<MembersCountextModel>(null);

const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [memberList, setMemberList] = React.useState<MemberEntity[]>([]);

  const clear = () => {
    setMemberList([]);
  };

  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then(setMemberList);
  }, []);
  return (
    <MembersContext.Provider value={{ memberList, clear }}>
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
