const mongoose = require ('mongoose')
const  mongoPath  = 'mongodb+srv://manan:nkXUewpOs5MX8HGL@cluster0.gy9ki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

module.exports = async () => {
	await mongoose.connect(mongoPath, {
		keepAlive:true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify:false,

	})
	return mongoose
}