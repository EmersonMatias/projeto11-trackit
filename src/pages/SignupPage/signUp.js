import axios from "axios"

export default function signUp(e, setInputState, setDataSignUp, dataSignUp, navigate) {
    e.preventDefault()

    let checkPassword = dataSignUp.password.length
    setInputState(true)

    function errorSignUp(error) {
        alert(error.response.data.message)
        setInputState(false)
        setDataSignUp({ email: "", name: "", image: "", password: "" })
    }

    function sucessSignUp(response) {
        console.log(response.data)
        setInputState(false)
        setDataSignUp({ email: "", name: "", image: "", password: "" })
        navigate('/')
        alert("Cadastro efetuado com sucesso!")
    }

    if (checkPassword <= 10) {
        alert("Por favor, digite uma senha que contenha no mínimo 10 dígitos")
        setInputState(false)
    } else {
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', dataSignUp)
            .then((response) => (sucessSignUp(response)))
            .catch((error) => (errorSignUp(error)))
    }
}