# 1)მიმატება: შექმენი lambda ფუნქცია, რომელიც იღებს ერთ რიცხვს და მას 15-ს უმატებს.

# 2)გამრავლება: შექმენი lambda ფუნქცია, რომელიც იღებს ორ არგუმენტს (x და y) და აბრუნებს მათ ნამრავლს.

# 3)ტექსტის შებრუნება: დაწერე lambda, რომელიც მიღებულ სტრიქონს (string) უკუღმა დაწერს (მაგალითად: "Python" -> "nohtyP").

# მინიშნება: გამოიყენე სლაისინგი.


# 4)სიტყვების სიგრძე: გაქვს სია: ["apple", "banana", "cherry", "kiwi"]. დაასორტირე ის სიტყვების სიგრძის მიხედვით lambda ის გარეშე.

# 5)ბოლო ასო: იგივე სია დაასორტირე სიტყვების ბოლო ასოს მიხედვით.

# 6)Tuples დალაგება: გაქვს პროდუქტების სია ფასებით: [("Milk", 3), ("Bread", 2), ("Cheese", 5)]. დაასორტირე ეს სია ფასის მიხედვით (ზრდადობით).

# 7)ახსენი რა არის lambda და რაში გვჭირდება და რითი განსხვავდება ჩვეულებრივი ფუნქციისგან


#1
add_15 = lambda x: x + 15
print(add_15(10))

#2
multiply = lambda x, y: x * y
print(multiply(5, 3))

#3
reverse_string = lambda s: s[::-1]
print(reverse_string("GOA BEST"))

#4 
fruits = ["apple", "banana", "cherry", "kiwi"]
sorted_by_length = sorted(fruits, key=len)
print(sorted_by_length)

#5
sorted_by_last_letter = sorted(fruits, key=lambda x: x[-1])
print(sorted_by_last_letter)

#6
products = [
    ("Milk", 3), 
    ("Bread", 2), 
    ("Cheese", 5)
]
sorted_by_price = sorted(products, key=lambda x: x[1])
print(sorted_by_price)

#7
# Lambda ფუნქცია არის ანონიმური ფუნქცია, რომელიც გამოიყენება ერთჯერადი ოპერაციების შესასრულებლად. ის განსხვავდება ჩვეულებრივი ფუნქციისგან იმით, რომ მას არ აქვს სახელი და ის შეიძლება დაწერილი იყოს ერთ ხაზში. Lambda ფუნქციები ხშირად გამოიყენება ფუნქციურ პროგრამირებაში და კოლექციების დამუშავებისას, მაგალითად, sorting ან filtering ოპერაციებში.
