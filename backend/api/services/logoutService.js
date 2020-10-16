/**
 * Logout Service
 */
export default (model, req) => new Promise(async (res, rej) => {
    try {
        //Get _id
        const _id = req._id

        //Mark {isLoggedIn} flag as false
        await model.findOneAndUpdate({
            _id
        }, {
            $set: {
                isLoggedIn: false
            }
        })

        res('Logged out successfully')
    } catch (error) {
        console.log(error)
        rej(error)
    }
})