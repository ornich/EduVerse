from django.db import models
from django.conf import settings

class Course(models.Model):
    instructor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='courses')
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self): return self.title

class Lesson(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='lessons')
    title = models.CharField(max_length=200)
    content = models.TextField()
    order = models.PositiveIntegerField(default=0)
    class Meta: ordering = ['order']
    def __str__(self): return self.title

class Worksheet(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='worksheets')
    question_text = models.TextField()
    def __str__(self): return f"Worksheet: {self.lesson.title}"

class WorksheetSubmission(models.Model):
    worksheet = models.ForeignKey(Worksheet, on_delete=models.CASCADE, related_name='submissions')
    student = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    answer_text = models.TextField()
    grade = models.CharField(max_length=10, null=True, blank=True)
    feedback = models.TextField(null=True, blank=True)
    submitted_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        unique_together = ('worksheet','student')
    def __str__(self): return f"{self.student.username} - {self.worksheet.lesson.title}"
