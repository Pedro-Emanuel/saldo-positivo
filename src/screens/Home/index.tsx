import { Container, GroupCard } from "./styles"; 

import { ControlCard } from '../../components/ControlCard';
import { TopBar } from "../../components/TopBar";
import { Planning } from "../../components/Planning";


export function Home() {
    return(
        <Container>
            <TopBar name = 'Caio Rian'/>
            <GroupCard>
                <ControlCard
                    type = 'DESPESA'
                />
                <ControlCard
                    type = 'RECEITA'
                />
            </GroupCard>
            <Planning/>

        </Container>
    );
}