import { ArrowIcon, Container, ControlCardTypeStyleProps, Header, Icon, Title, SectionTilte } from "./styles";

type Props = {
    type: ControlCardTypeStyleProps;
}

export function ControlCard({ type }: Props) {
    return(
        <Container>
            <Header>
                <SectionTilte>
                    <Icon
                        type={type}
                        name= {type === 'DESPESA' ? 'arrow-circle-down': 'arrow-circle-up'}  
                    />

                    <Title>
                        {type === 'DESPESA' ?  'Despesas' : 'Receitas'}
                    </Title>
                </SectionTilte>
                <ArrowIcon/>
            </Header>


        </Container>
    );
}