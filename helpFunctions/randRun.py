import random

x = input("how long are rows? ")
y = input("how long are columbs? ")

for i in range(int(x)):
    for d in range(int(y)):
        ra = random.randint(0,2)
        if ra == 0:
            print('24'),
        elif ra == 1:
            print('32'),
        elif ra == 2:
            print('40'),
            
        if d == (y-1):
            print('')
        else:
            print(','),
