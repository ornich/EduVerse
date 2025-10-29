from django.contrib import admin
from .models import Course, Lesson, Worksheet, WorksheetSubmission
admin.site.register(Course)
admin.site.register(Lesson)
admin.site.register(Worksheet)
admin.site.register(WorksheetSubmission)
