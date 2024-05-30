const mongoose = require('mongoose');

async function runTest() {
    try {
        // Replace 'mongodb://localhost:27017/LoginSignUpVT' with your connection string if different
        await mongoose.connect('mongodb://localhost:27017/LoginSignUpVT', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB successfully");

        // Define a simple schema and model just for testing
        const testSchema = new mongoose.Schema({
            name: { type: String, required: true },
            description: { type: String, required: true }
        });
        const Test = mongoose.model('Test', testSchema);

        // Create a new document instance
        const testDoc = new Test({
            name: 'Test Entry',
            description: 'Just a test document'
        });

        // Save the document to the database
        const savedDoc = await testDoc.save();
        console.log('Document saved:', savedDoc);

        // Clean up: Optionally delete the test document after checking
        await Test.deleteOne({ _id: savedDoc._id });
        console.log('Test document deleted.');

    } catch (error) {
        console.error('Failed to connect or operate with MongoDB:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
}

runTest();
