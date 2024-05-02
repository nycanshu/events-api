const Event = require('../models/event-model');


module.exports = {

    //just to print about me on screen
    home: (req,res)=> {
        res.json(
          {
            "Owner": 'Himanshu Kumar',
            "About Me": 'I am a pre final year student seeking for an internship in the field of software development. I am a quick learner and have a good understanding of data structures and algorithms. I have a good understanding of web development and have worked on various projects. I am a team player and have good communication skills. I am always ready to learn new things and explore new technologies. I am looking for an opportunity where I can learn and grow as a software developer.',
            "connect here" : 'https://www.linkedin.com/in/okay-anshu/',
            "github" : 'https://github.com/nycanshu',
          }
          );
    },


    //function to add a event to database
    addEvent: async (req,res)=>{
        try {
          const event = await Event.create(req.body);
          res.status(201).json(event);
        } catch (error) {
          if (error.code === 11000 && error.keyPattern && error.keyPattern.title && error.keyPattern.eventdate) {
            // Duplicate key error
            res.status(400).json({ message: 'Event with the same title and event date already exists.' });
        } else {
            console.error(error.message);
            res.status(500).json({ message: 'Internal server error' });
        }
        }
      },

    //function to get all events from database
    getAllEvents: async (req,res)=>{
        try {
          const events = await Event.find({});
          res.status(200).json(events);
        } catch (error) {
          console.log(error.message);
          res.status(500).json({message: error.message});
        }
      },

    //function to get event by id
    getEventById: async (req,res)=>{
      try {
        const {id} =  req.params;
        const event = await Event.findById(id);
        res.status(200).json(event);
      } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
      }
    },
    //function to update event by id
    updateEventById:async (req,res)=>{
      try {
        const {id} = req.params;
        const event = await Event.findByIdAndUpdate(id,req.body,{new:true});
        if(!event){
          return res.status(404).json({message: 'Event not found'});
        }
        res.status(200).json(event);
      } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
      }
    },
  //function to delete event by id
  deleteEventById: async (req,res)=>{
    try {
      const {id} = req.params;
      const event = await Event.findByIdAndDelete(id);
      if(!event){
        return res.status(404).json({message: 'Event not found'});
      }
      res.status(200).json({message: 'Event deleted successfully'});
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message});
    }
  },
}