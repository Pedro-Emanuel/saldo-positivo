import { Container, Header, UserInfo, Photo, UserName, SettingsButton, SettingsIcon, EyeButton, EyeIcon, Month, ArrowLeft, ArrowRight, Period, ArrowButton, GeneralBalance, Balance, Value, SubTitle} from './styles';

type Props = {
    name: string;
    month: string;
    currentBalance: string;
    expectedBalance: string
}

export function TopBar({name, month, currentBalance, expectedBalance}: Props) {
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
            <Period>
                <ArrowButton><ArrowLeft/></ArrowButton>
                <Month>{month}</Month>
                <ArrowButton><ArrowRight/></ArrowButton>
            </Period>
            <GeneralBalance>
                <Balance>
                    <Value>
                        <SubTitle>
                            R$
                        </SubTitle> 
                        {currentBalance}
                    </Value>
                    <SubTitle>Saldo atual</SubTitle>
                </Balance>
                <Balance>
                    <Value>
                        <SubTitle>
                            R$
                        </SubTitle>
                        {expectedBalance}
                    </Value>
                    <SubTitle>Saldo Previsto</SubTitle>
                </Balance>
            </GeneralBalance> 
        </Container>
    );
}