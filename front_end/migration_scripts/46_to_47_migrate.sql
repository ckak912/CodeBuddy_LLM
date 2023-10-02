ALTER TABLE LLM_stuff
ADD COLUMN date_created timestamp NOT NULL DEFAULT 0;

UPDATE LLM_stuff
SET date_created = (SELECT date_updated FROM presubmissions WHERE LLM_stuff.date_created == presubmissions.date_updated);
