import {Container} from "../../components/Container";
import {AccountCard} from "../../components/AccountCard";
import {account} from "../../mocks/account";

export const Profile = () => {
    return (
        <Container>
            <AccountCard image={account.image} fullName={account.name} username={account.username}/>
        </Container>
    )
}