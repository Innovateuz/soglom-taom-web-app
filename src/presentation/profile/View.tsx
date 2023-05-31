import {Container} from "../../components/Container";
import {AccountCard} from "../../components/AccountCard";
import {account} from "../../mocks/account";
import {Info} from "./components/Info";

export const Profile = () => {
  return (
    <Container>
      <AccountCard image={account.image} fullName={account.name} username={account.username}/>
      <div className='mt-3 mb-4'>
        <Info/>
      </div>
    </Container>
  )
}