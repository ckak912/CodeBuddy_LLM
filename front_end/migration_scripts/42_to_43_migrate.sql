CREATE TABLE LLM_stuff (
    exercise_feedback JSON NOT NULL DEFAULT '{}',
    LLM_course_id integer NOT NULL, 
    LLM_assignment_id integer NOT NULL, 
    LLM_exercise_id integer
);

