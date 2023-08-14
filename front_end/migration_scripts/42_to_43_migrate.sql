CREATE TABLE LLM_stuff (
    exercise_feedback JSON NOT NULL DEFAULT '{}',
    course_id integer NOT NULL, 
    assignment_id integer NOT NULL, 
    exercise_id integer
);

