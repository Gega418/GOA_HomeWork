# # 1) შექმენი ცვლადი სადაც შეინახავ შენს სახელს შემდეგ გადაუარე ცვლადს და გამოიტანე შენი სახელი  ცალ-ცალკე
# # 2) შექმენი for ციკლი სადაც გამოიტან კენტ რიცხვებს 1 დან 300 ამდე
# # 3) შექმენი for ციკლი სადაც გამოიტან ლუწ რიცხვებს 1 დან 200 ამდე.
# # 4) გამოიტანე შენი სახელი 20 ჯერ for ციკლის დახმარებით.
# #1
# name = "Gega"
# for i in (name):
#     print(i)

# #2
# for i in range(1, 301, 2):
#     print(i)

# #3
# for i in range(2, 201, 2):
#     print(i)

# #4
# for i in range(20):
#     print("Gega")


# 5) შექმენით ცვლადი სახელად correct_password სადაც შეინახავთ რაიმე პაროლს, შემდეგ მომხმარებელს შემოატანინეთ პაროლი, სანამ ეს პაროლი არ იქნება correct_password-ის ტოლი, თავიდან შემოატანინეთ პაროლი.

correct_password = "12345"
user_password = input("enter your password")

while user_password != correct_password:
    print("Correct password")
    user_password = input("enter your password again")