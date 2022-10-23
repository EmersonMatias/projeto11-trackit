import { ThreeDots } from 'react-loader-spinner'

export default function textButtonSave({inputState}){
    if (inputState === true) {
        return <ThreeDots
            height="40"
            width="40"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    } else {
        return "Salvar"
    }
}