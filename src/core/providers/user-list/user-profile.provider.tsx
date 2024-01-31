import React from "react";
import { UserListContext } from ".";
import { Member } from "./user-list.vm";

export const UserListProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [memberList, setMemberList] = React.useState<Member[]>([]);
  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then(setMemberList);
  }, []);
  return (
    <UserListContext.Provider value={{ memberList  }}>
      {children}
    </UserListContext.Provider>
  );
};