number = int(input())

def isNar(num):
    n = 0
    for i in num:
        n += int(i)**len(num)
    if(n == int(num)):
        return True
    else:
        return False

for i in range(100,number+1):
    if(isNar(str(i))):
        print(i)
