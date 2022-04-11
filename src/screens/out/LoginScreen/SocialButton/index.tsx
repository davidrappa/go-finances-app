import React from 'react'
import { StyleProp, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import * as S from './styles'

export type ButtonProps = {
	name: string;
	handleLoginSocial(): void;
	svg: React.FC<SvgProps>;
}

const SocialButton = ({ svg: Svg, name, handleLoginSocial }: ButtonProps): JSX.Element => {
	return (
		<S.Container onPress={handleLoginSocial} activeOpacity={0.8} >
			<S.ImageContainer>
				<Svg />
			</S.ImageContainer>
			<S.Title>{name}</S.Title>
		</S.Container>
	)
}

export default SocialButton