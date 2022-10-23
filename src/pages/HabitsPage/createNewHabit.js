import axios from "axios"

export default function createNewHabit(setInputState, setNewHabitData, setStateNewHabit, config, newHabitData) {
    setInputState(true)


    function newHabitSucess(response) {
        console.log(response.data)
        setInputState(false)
        setNewHabitData({ name: "", days: [] })
        setStateNewHabit(false)
    }

    function newHabitError(error) {
        alert(error.response.data.message)
        setInputState(false)
    }

    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", newHabitData, config)
        .then((response) => (newHabitSucess(response)))
        .catch((error) => (newHabitError(error)))


}