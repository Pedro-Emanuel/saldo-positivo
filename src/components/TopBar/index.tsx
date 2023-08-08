import { Container, Header, UserInfo, Photo, UserName, SettingsButton, SettingsIcon, EyeButton, EyeIcon} from './styles';

type Props = {
    name: string
}

export function TopBar({name}: Props) {
    return(
        <Container>
            <Header>
                <UserInfo>
                    <Photo source={require("../../../assets/icon.png")}/>
                    <UserName>{name}</UserName>
                </UserInfo>
                <EyeButton>
                    <EyeIcon/>
                </EyeButton>
                <SettingsButton>
                    <SettingsIcon/>
                </SettingsButton>
            </Header>    
        </Container>
    );
}