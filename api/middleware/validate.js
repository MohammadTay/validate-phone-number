import axios from "axios"

const validate = async (req, res, next) => {
    let temp;

    try {
        const { data } = await axios(`http://apilayer.net/api/validate?access_key=3d2feedd14ea5b4ffa0fa65f7df61eb5&number=${req.body.phoneNumb}`)
        temp = data
        if (!data.valid) {
            return res.status(404).json("phone api not valid")
        }
    } catch (err) {
        console.log(err)

    }
    req.tay = temp
    next()

}
export default validate