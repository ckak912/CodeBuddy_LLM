-- Add the new column with a default value
ALTER TABLE LLM_stuff
ADD COLUMN date_created timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Update the new column with values from presubmissions
UPDATE LLM_stuff
SET date_created = (SELECT date_updated FROM presubmissions WHERE LLM_stuff.date_created == presubmissions.date_updated);
