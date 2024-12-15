
import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection.js';

const insertTask = (taskText) => {
  TasksCollection.insert({ text: taskText, createdAt: new Date() });
};

Meteor.startup(async () => {
  try {
    const count = await TasksCollection.find().countAsync(); // Use countAsync
    if (count === 0) {
      console.log("Inserting initial tasks...");
      ['First Task', 'Second Task', 'Third Task'].forEach(insertTask);
    }
  } catch (error) {
    console.error("Error counting tasks:", error);
  }
});
