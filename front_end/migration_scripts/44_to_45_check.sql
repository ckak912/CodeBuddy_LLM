SELECT COUNT(*) AS count
FROM pragma_table_info("LLM_stuff")
WHERE name = "pseudo_code"