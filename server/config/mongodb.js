const mongoose = require('mongoose');



async function main() {

    await mongoose.connect(process.env.MONGO_URI);
}


main()
    .then((val) => { console.log("successfully connected to database") })
    .catch(err => console.log(err));