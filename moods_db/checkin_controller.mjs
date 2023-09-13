import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as entries from './checkin_model.mjs';

const app = express();

const PORT = process.env.PORT;
 
app.use(express.json());

app.post('/entries', asyncHandler((req,res) => {
    entries.createEntry(req.body.date, req.body.overallMood, req.body.journalEntry)
        .then(entries => {
            res.status(201).json(entries);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Invalid Request' });
        });
}));

app.get('/entries', asyncHandler(async(req, res) => {
    let filter = {};
    try{
        const result = await entries.findEntry(filter)
        res.send(result)
    } catch(err){
        res.send({Error: 'Request failed'});
    }
}));

app.get('/entries/:id', asyncHandler(async(req, res) => {
    const entryID = req.params.id;
    try{
        const result = await entries.findEntryByID(entryID)
        if(result != null){
            res.json(result)
        }else{
            res.status(404).json({Error: 'Not found'})
        }
    }catch(err){
        res.send({Error: 'Request failed'});
    }   
}));




app.get('/entries/:date', (req, res) => {
    const date = req.params.date;
    entries.findEntrybyDay(date)
        .then(mood => {
            if (mood !== null) {
                res.json(mood);
            } else {
                res.status(404).json({Error: 'Resource not found'});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({Error: 'Reqest failed'});
        })
});


// functions added by me

app.put('/entries/:id', asyncHandler(async(req, res) => {
    entries.updateEntry(req.params.id, req.body.date, req.body.overallMood, req.body.journalEntry)
        .then(result =>{
            if(result === 1){
                res.json({_id: req.params.id, date: req.body.date, overallMood: req.body.overallMood, journalEntry: req.body.journalEntry})
            }else {
                res.status(404).json({Error: 'Not found'});
            }})
        .catch(error => {
            res.status(400).json({Error: 'Request failed'});
            });
        }
 ));


app.delete('/entries/:id', asyncHandler(async(req, res) => {
    const filter = {_id: req.params.id}
    entries.deleteEntry(filter)
        .then(result => {
            if (result === 1){
                res.status(204).send();
            }else{
                res.status(404).json({Error: 'Not found'})
            }
        })
        .catch(error => {
            res.send({Error: 'Request failed'})
        });
}));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});