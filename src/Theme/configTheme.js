// theme.js
import { extendTheme } from "@chakra-ui/react"
export const configTheme = extendTheme({
    breakPoint: {
        lg: '1200px',
        md: "1000px",
        sm: '800px',
        sx: "500px"
    },
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        Tblack: '#385898',
        lightGrey: '#f0f2f5',
        darkGrey: 'ced0d4',
        grey: '#65676b',
        blue: '#1b74e4',
        lightBlue: '#216fdb',
        darkBlue: '#1b74e4',
    },
    fonts: {
        title1: {
            fontSize: '17px',
            fontWeight: '600',
            lineHeight: '20px'
        },
        title2: {

            fontSize: '15px',
            fontWeight: '500',
            lineHeight: "19px"
        },
        body1: {
            fontFamily: 'Work San',
            fontSize: '12px',
            lineHeight: "16px"
        },
        body2: {
            fontFamily: 'Work San',
            fontSize: '8px'
        }

    }
})