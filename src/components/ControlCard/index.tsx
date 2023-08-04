import { ArrowIcon, Container, ControlCardTypeStyleProps, HeaderCard, Icon, Title } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
    type: ControlCardTypeStyleProps;
}

export function ControlCard({ type }: Props) {
    return(
        <Container>
            <HeaderCard>
                <Icon
                    type={type}
                    name= {type === 'DESPESA' ? 'arrow-circle-down': 'arrow-circle-up'}  
                />

                <Title>
                    {type === 'DESPESA' ?  'Despesas' : 'Receitas'}
                </Title>

                <ArrowIcon/>
            </HeaderCard>
        </Container>
    );
}