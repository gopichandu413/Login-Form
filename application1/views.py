from django.shortcuts import render
from django.views import View
class Test_case1(View):
    def get(self,request):
        return render(request,"application1/S1.html")

# Create your views here.
