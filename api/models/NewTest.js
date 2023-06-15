import mongoose from 'mongoose';
const { Schema } = mongoose;

mongoose.connect('mongodb+srv://USER:PASS@testcluster.abcde.mongodb.net/mongoose?retryWrites=true&w=majority', () => {
    console.log("db connected successfully..")
})

const bodySchema = new Schema({
    image: { type: String, required: false, set: a => a === '' ? undefined : a },
    title: { type: String, required: false, set: b => b === '' ? undefined : b },
    subtitle: { type: String, required: false, set: c => c === '' ? undefined : c },
    category: { type: String, required: false, set: d => d === '' ? undefined : d },
    tags: { type: String, required: false, set: e => e === '' ? undefined : e },
    text: { type: String, required: false, set: f => f === '' ? undefined : f },
    contactperson: { type: String, required: false, set: g => g === '' ? undefined : g },
    contact: { type: String, required: false, set: h => h === '' ? undefined : h },
    author: { type: String, required: false, set: i => i === '' ? undefined : i },
    expires: { type: String, required: false, set: j => j === '' ? undefined : j }
}, { minimize: true })

const Body = mongoose.model('Body', bodySchema);

await Body.create({
    image: '',
    title: 'hi',
    subtitle: '',
    category: 'Jobs',
    tags: '',
    text: '',
    contactperson: '',
    contact: '',
    author: 'Felicia',
    expires: '2022-08-06'
})

console.log("doc inserted")