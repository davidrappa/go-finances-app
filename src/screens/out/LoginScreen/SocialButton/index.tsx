import React from 'react'
import { StyleProp, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';

import * as S from './styles'

export type ButtonProps = {
	name: string;
	handleLoginSocial(): void;
}

const SocialButton = ({ name, handleLoginSocial }: ButtonProps): JSX.Element => {
	return (
		<S.Container onPress={handleLoginSocial} activeOpacity={0.8} >
			<S.Title>{name}</S.Title>
		</S.Container>
	)
}

export default SocialButton