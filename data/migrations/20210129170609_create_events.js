
exports.up = function(knex) {
    return knex.schema
    .createTable("events", tbl => {
        tbl.increments();
        tbl.timestamps(true, true);
    
        tbl
            .string("title", 128)
            .notNullable()
        tbl
            .text("body")
            .notNullable()

        tbl
            .integer("event_month")
        tbl
            .integer("event_day")
        tbl
            .integer("event_year")
        tbl
            .string("event_time")
        tbl
            .text("contact_phone")
        tbl
            .text("contact_email")

        tbl
            .text("contact_extra")

        tbl
            .string("img_url", 256)
            .unique()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("events");
};
