import { styled } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { CaretRight } from 'phosphor-react-native';

import { TouchableOpacity } from "react-native";
import theme from "../../theme";

export type ControlCardTypeStyleProps = 'DESPESA' | 'RECEITA';

type Props = {
    type: ControlCardTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
    width: 168px;
    height: 187px;

    background-color: ${theme.COLORS.GRAY_600};
    border-radius: 8px;

    margin-top: 16px;
    margin-right: 4px;
    margin-left: 4px;

    shadow-color: #000000;
    elevation: 8;
`;

export const Title = styled.Text`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    
    color: ${theme.COLORS.WHITE};

    margin-top: 14px;
`;

export const SectionTilte = styled.View`
    flex-direction: row;
    align-items: center;
`; 

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
    size: 28,
    color: type === 'RECEITA' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_600
}))`
    margin-top: 6px;
    margin-left: 6px;
    margin-right: 6px;
`;

export const ArrowIcon = styled(CaretRight).attrs(({ theme }) => ({ 
    size: 20,
    color: theme.COLORS.WHITE
}))`
    margin-top: 12px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 16px;
`;