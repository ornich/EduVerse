from rest_framework import serializers
from .models import CustomUser

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = CustomUser
        fields = ('id','username','email','password','is_instructor')

    def create(self, validated_data):
        user = CustomUser(username=validated_data['username'], email=validated_data.get('email',''))
        user.set_password(validated_data['password'])
        user.is_instructor = validated_data.get('is_instructor', False)
        user.save()
        return user
