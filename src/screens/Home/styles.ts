import styled from 'styled-components/native';
import theme from '../../theme/index';

import { SafeAreaView } from 'react-native-safe-area-context';

import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${theme.COLORS.GRAY_700};
    align-items: center;
    justify-content: 'center';
`;


export const GroupCard = styled.View`
    flex-direction: row;
    padding: 0 ${RFPercentage(2)}px;
`;
