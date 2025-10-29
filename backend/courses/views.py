from rest_framework import viewsets
from .models import Course, Lesson, Worksheet, WorksheetSubmission
from .serializers import CourseSerializer, LessonSerializer, WorksheetSerializer, WorksheetSubmissionSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

class WorksheetViewSet(viewsets.ModelViewSet):
    queryset = Worksheet.objects.all()
    serializer_class = WorksheetSerializer

class SubmissionViewSet(viewsets.ModelViewSet):
    queryset = WorksheetSubmission.objects.all()
    serializer_class = WorksheetSubmissionSerializer
