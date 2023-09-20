CREATE TABLE LLM_user_code (
    course_id integer NOT NULL,
    assignment_id integer NOT NULL,
    exercise_id integer NOT NULL,
    code text NOT NULL,
    date_created timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES exercises (course_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (assignment_id) REFERENCES exercises (assignment_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (exercise_id) REFERENCES exercises (exercise_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (code) REFERENCES presubmissions (code) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (date_created) REFERENCES presubmissions (date_updated) ON DELETE CASCADE ON UPDATE CASCADE
);

