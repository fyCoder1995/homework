import random
menu = ["Coffee","Tea","Mile","Water","Cola"]
print("Menu",menu)
name = input("Your name，Please：")
drink = random.choice(menu)
print("hello",name,"! Enjoy Your",drink)
