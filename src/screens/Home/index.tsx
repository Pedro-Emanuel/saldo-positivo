import { Container, TopBar, Section, Image, Text, GroupCard } from "./styles"; 

import { ControlCard } from "../../components/ControlCard";


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

            <GroupCard>
                <ControlCard
                    type = 'DESPESA'
                />
                <ControlCard
                    type = 'RECEITA'
                />
            </GroupCard>
            

        </Container>
    );
}