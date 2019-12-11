s = str(input("请输入字符串："))
n = int(input("请输入左移位数："))


def outputStr(s,n):
    f = s[slice(0,n)]
    b = s[slice(n,len(s))]
    print(b+f)

outputStr(s,n)
