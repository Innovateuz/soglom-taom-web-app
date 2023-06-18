import { Container } from "../../components/Container";
import { AccountCard } from "../../components/AccountCard";
import { account } from "../../mocks/account";
import { Info } from "./components/Info";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <AccountCard
        image={account.image}
        fullName={account.name}
        username={account.username}
      />
      <div className="mt-3 mb-4">
        <Info />
      </div>
      <Button
        onClick={() => {
          navigate("/profile/update");
        }}
        name="Update"
        className="bg-primary text-white"
      />
    </Container>
  );
};
