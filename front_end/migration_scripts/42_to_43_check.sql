SELECT COUNT(*) AS count
FROM pragma_table_info("exercises")
WHERE name = "exercise_steps"