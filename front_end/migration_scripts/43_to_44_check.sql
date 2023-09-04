SELECT COUNT(*) AS count
FROM pragma_table_info("LLM_stuff")
WHERE name = "hint_code"