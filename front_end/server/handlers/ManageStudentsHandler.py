from BaseUserHandler import *

class ManageStudentsHandler(BaseUserHandler):
    async def get(self, course_id):
        try:
            is_instructor = await self.is_instructor_for_course(course_id)

            if self.is_administrator or is_instructor:
                self.render("manage_students.html", course_basics=await self.get_course_basics(course_id), students=self.content.get_registered_students(course_id), user_info=self.user_info, is_administrator=self.is_administrator, is_instructor=is_instructor, is_assistant=await self.is_assistant_for_course(course_id))
            else:
                self.render("permissions.html")
        except Exception as inst:
            render_error(self, traceback.format_exc())