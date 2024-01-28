import React from "react";
import { useNavigate, useParams } from "react-router-dom";

interface MemberDetailEntity {
  id: number;
  login: string;
  avatar_url: string;
  bio: string;
  company: string;
}

export const DetailPage: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>();
  const navigate = useNavigate();
  const { login } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setMember);
  }, [login]);

  return (
    <>
      {member ? (
        <>
          <img src={member.avatar_url} alt={member.login} />
          <h3>{member.login}</h3>
          <h4>ID:{member.id}</h4>
          <h4>Company:{member.company}</h4>
          <h4>Bio:{member.bio}</h4>
        </>
      ) : (
        <div>Loading...</div>
      )}
      <button onClick={() => navigate(-1)}>Atras</button>
    </>
  );
};
