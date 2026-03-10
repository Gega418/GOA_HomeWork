# გააკეთეთ იგივე პროექტი ოღონდ უკვე პითონით, მოიძიეთ random ბიბლიოთეკაზე ინფორმაცია, დაგჭირდებათ.

import random

user_points = 0
comp_points = 0

while user_points < 3 and comp_points < 3:
    user_choice = input("Enter rock, paper or scissors: ").lower()
    while user_choice != "rock" and user_choice != "paper" and user_choice != "scissors":
        user_choice = input("Enter valid choice(rock, paper, scissors): ")

    comp_choice = random.choice(["rock", "paper", "scissors"])
    
    print("Your choice: ", user_choice)
    print("Comp choice: ", comp_choice)

    if user_choice == comp_choice:
        print("it's a tie!")
    elif (user_choice == "rock" and comp_choice == "scissors") or (user_choice == "paper" and comp_choice == "rock") or (user_choice == "scissors" and comp_choice == "paper"):
        print("You won this round!")
        user_points += 1
    else:
        print("Computer won this round!") 
        comp_points += 1

    print("Your score: ", user_points, "| Computer points: ", comp_points)

if user_points == 3:
    print("You won this game!")
else:
    print("Computer won this game!")