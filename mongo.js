const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('(.env) connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('ok, connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })


// if (process.argv.length<3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

// const password = process.argv[2]

// const url =
//   `mongodb+srv://helsinki:${password}@helsinki-webdev.zhkhb.mongodb.net/noteApp?retryWrites=true&w=majority&appName=helsinki-webdev`

// mongoose.set('strictQuery',false)

// mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

//// SAVE NEW NOTE ////
// const note = new Note({
//   content: 'HTML is easy',
//   important: true,
// })

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

//// GET ALL NOTES ////
Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})