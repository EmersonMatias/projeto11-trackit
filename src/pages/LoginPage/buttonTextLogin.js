import { ThreeDots } from 'react-loader-spinner'

export default function buttonTextLogin(inputState) {
   
    if (inputState === true) {
        return <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    } else {
        return "Entrar"
    }
}