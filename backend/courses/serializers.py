from rest_framework import serializers
from .models import Course, Lesson, Worksheet, WorksheetSubmission

class WorksheetSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorksheetSubmission
        fields = '__all__'

class WorksheetSerializer(serializers.ModelSerializer):
    submissions = WorksheetSubmissionSerializer(many=True, read_only=True)
    class Meta:
        model = Worksheet
        fields = '__all__'

class LessonSerializer(serializers.ModelSerializer):
    worksheets = WorksheetSerializer(many=True, read_only=True)
    class Meta:
        model = Lesson
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    lessons = LessonSerializer(many=True, read_only=True)
    class Meta:
        model = Course
        fields = '__all__'
