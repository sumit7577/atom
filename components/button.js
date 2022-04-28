import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'galio-framework';
import { SIZES,COLORS } from '../utils/constant';


class ArButton extends React.Component {
    render() {
        const { small, shadowless, children, color, style, fontSize, round, big, full, border, ...props } = this.props;

        const colorStyle = color && COLORS[color.toUpperCase()];

        const buttonStyles = [
            small && styles.smallButton,
            big && styles.bigButton,
            full && styles.fullButton,
            border && { borderWidth: 1, borderColor: COLORS.BORDER },
            colorStyle === 'neutral'
                ? { backgroundColor: COLORS.WHITE }
                : color && { backgroundColor: colorStyle },
            round && { borderRadius:SIZES.BASE * 2 },
            { ...style }
        ];

        return (
            <Button
                style={buttonStyles}
                shadowless
                textStyle={{ fontSize: fontSize || 12, fontWeight: '700' }}
                {...props}
            >
                {children}
            </Button>
        );
    }
}

ArButton.propTypes = {
    small: PropTypes.bool,
    shadowless: PropTypes.bool,
    color: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([
            'default',
            'primary',
            'info',
            'error',
            'success',
            'warning',
            'simple',
            'neutral'
        ])
    ])
};
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
    smallButton: {
        width: 100,
        height: 50,
    },
    bigButton: {
        width: width / 2.2,
        height: 60,
    },
    fullButton: {
        width: width * 0.90,
        height: 50,
        borderRadius: 7,
    }
});

export default ArButton;
