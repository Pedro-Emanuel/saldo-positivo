import { Container, TopBar, Section, Image, Text } from "./styles"; 

export function Home() {
    return(
        <Container>
            {/* Barra do topo */}
            <TopBar>
                <Section>
                    <Image source={require("../../../assets/icon.png")}/>
                    <Text>Caio Rian</Text>
                </Section>
            </TopBar>
        </Container>
    );
}