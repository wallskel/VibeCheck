import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

const moodSchema = mongoose.Schema({
    date: {type: String},
    overallMood: {type: String},
    journalEntry: {type: String}
});

const Entry = mongoose.model("Entry", moodSchema);

const createEntry = async (date, overallMood, journalEntry) => {
    const entry = new Entry({date: date, overallMood: overallMood, journalEntry: journalEntry});
    return entry.save();
};

const findEntry = async (filter) => {
    const result = Entry.find(filter).sort({"date":-1});  // sort by date added by me 
    return result.exec();
};

const findEntryByID = async (_id) => {
    const result = Entry.findById(_id);
    return result.exec();
};

const findEntrybyDay = async(filter, projection, limit) => {
    const query = Entry.findEntry({date: filter})
        .select(projection)
        .limit(limit);
    return query.exec(); 
};

const updateEntry = async (_id, date, overallMood, journalEntry) => {
    const result = await Entry.replaceOne({_id: _id}, {date: date, overallMood: overallMood, journalEntry:journalEntry});
    return result.matchedCount;
};

const deleteEntry = async(filter) => {
    const result = await Entry.deleteMany(filter);
    return result.deletedCount;
};



db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

export {createEntry, findEntry, findEntryByID, updateEntry, deleteEntry, findEntrybyDay}