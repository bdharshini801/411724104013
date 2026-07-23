l=[1,2,3.14,"Hello",True]
l.append("Tomorrow")
l.pop(2)
print(l)

s=set()
s.add(1)
s.add(1)
s.add(2)
s.add(3)
print(s)

d={1:'A',2:'B',3:'C'}
for k,v in d.items():
    print(k,v)


def function1():
    print("Hello")
    print(function1())

class Class1:
    def __init__(self, i):
        self.i = i

    def function2(self):
        print(self.i)

    def function3(self):
        print(self.i)
        self.function2()

obj=Class1(2)
obj.function3()
obj.function2()

d={"name":"Akshaya","age":89,"salary":10000}
import json
res=json.dumps(d)
print(res)
print(type(res))

with open("usersBatch3.json","r") as file:
    data=json.load(file)
    print(data)
    print(type(data))