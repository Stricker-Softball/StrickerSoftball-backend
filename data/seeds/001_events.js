exports.seed = function (knex, Promise) {
  const events = [
    { title: 'Sue\'s hitting clinic', 
      body: 'This is the body of an event. It will be a super duper cool event, with groups of 10',
      event_month:3,
      event_day: 20,
      event_year:2021,
      event_time:'6:30pm',
      contact_phone:'630-336-1553',
      contact_email:'sftbllcoach@gmail.com'
    }
]

  return (
    knex
      // Deletes ALL existing entries for events table
      .raw("TRUNCATE TABLE events RESTART IDENTITY CASCADE")
      .then(function () {
        return knex("events").insert(events);
      })
  );
};
