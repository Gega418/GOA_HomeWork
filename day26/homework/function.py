# 1) მომხმარებელს შემოატანინეთ სიტყვა. ტერმინალში კი დაბეჭდეთ ეს სიტყვა ისე რომ იყოს:

# 1. ყველა პატარა ასო;
# 2. ყველა დიდი ასო;
# 3. პირველი ასო დიდი, ხოლო ყველა დანარჩენი პატარა.

# 2) მომხმარებელს შემოატანინეთ სამი წინადადება და თითოეულზე გამოიყენეთ სხვადასხვა სტრინგის მეთოდი:
# პირველ წინადადებაზე — .lower()
# მეორე წინადადებაზე — .upper()
# მესამე წინადადებაზე — .capitalize()

# 3) ცვლადში შეინახე შენი სახელი. მომხმარებელს შეეკითხე თავისი სახელი, იმ შემთხვევაში თუ თქვენი სახელები ემთხვევა დაბეჭდეთ "Our names are similar!", თუ არ ემთხვევა დაბეჭდეთ "We have different names". გაითვალისწინეთ, რომ მომხმარებელმა შეიძლება თქვენნაირი სახელი შემოიტანოს, თუმცა სახელის ასოები შესაძლოა იყოს სხვადასხვა შრიფტის ზომით, ამიტომ ამან თქვენ პროგრამაში შეფერხება არ უნდა გამოიწვიოს (გამოიყენეთ ნასწავლი სტრინგის მეთოდები)

# 4) ცვლადში შეინახეთ წინადადება, დაწერეთ ისეთი პროგრამა რომ მხოლოდ წინადადების პირველი ასო იყოს დიდი ასოთი, დანარჩენი კი იყოს პატარა.

# 5) ცვლადში შეინახეთ რაიმე სტრინგი, შემდეგ .find() ფუნქციის მეშვეობით იპოვეთ რომელ ინდექსზეა კონკრეტული ასო.

# 6) შექმენით სია, სადაც დაამატებთ რამდენიმე სტრინგს. სიაში დამატებული თითოეული სტრინგი გადაიყვანეთ დიდ ასოებად for ციკლის მეშვეობით.


#1
word = input("Enter a word: ")
print(word.lower())          
print(word.upper())          
print(word.capitalize())     

#2
sentence1 = input("Enter the first sentence: ")
sentence2 = input("Enter the second sentence: ")
sentence3 = input("Enter the third sentence: ")
print(sentence1.lower())
print(sentence2.upper())
print(sentence3.capitalize())

#3
my_name = "gega"
user_name = input("Enter your name: ")
if my_name.capitalize() == user_name.capitalize():
    print("Our names are similar!")
else:
    print("We have different names.")

#4
sentance = "my name is gega and i am 15 years old."
print(sentance.capitalize())

#5
my_string = "Hello, my name is Gega."
print(my_string.find("G"))

#6
string_list = ["apple", "banana", "cherry", "pear"]
for i in range(len(string_list)):
    string_list[i] = string_list[i].upper()
print(string_list)