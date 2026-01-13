# 1) კომენტარების სახით ახსენი ნასწავლი მეთოდები რომელსაც ახსნით თითოეულს რა რას აკეთებს და მოიყვანეთ ორ-ორი მაგალითი თითოეულ მეთოდზე:

# .append()
# .clear()
# .copy()
# .count()
# .extend()
# .index()
# .insert()
# .pop()
# .remove()
# .reverse()
# .sort()

# -------------------------------------------------------------------------------------------------------------------------------------

# .append() - ამ მეთოდის საშუალებით შეგვიძლია დავამატოთ ახალი ელემენტი სიას ბოლოში.
fruits = ["apple", "banana"]
fruits.append("orange")
print(fruits) 
fruits1 = ["grape", "kiwi"]
fruits1.append("mango")
print(fruits1)  

# .clear() - ამ მეთოდის საშუალებით შეგვიძლია გავწმინდოთ მთელი სია.
numbers = [1, 2, 3, 4]
numbers.clear()
print(numbers)
numbers1 = [5, 6, 7, 8]
numbers1.clear()
print(numbers1)

# .copy() - ამ მეთოდის საშუალებით შეგვიძლია გავაკეთოთ ახალი ზუსტად იგივე სია.
colors = ["red", "blue", "green"]
new_colors = colors.copy()
print(new_colors)
colors1 = ["yellow", "purple", "orange"]
new_colors1 = colors1.copy()
print(new_colors1)

# .count() - ამ მეთოდის საშუალებით შეგვიძლია გავიგოთ რამდენჯერ მეორდება კონკრეტული ელემენტი სიაში.
animals = ["cat", "dog", "cat", "bird"]
print(animals.count("cat"))
animals1 = ["fish", "dog", "fish", "hamster"]
print(animals1.count("fish"))

# .extend() - ამ მეთოდის საშუალებით შეგვიძლია გავაერთიანოთ ორი სია.
list1 = [1, 2, 3]
list2 = [4, 5, 6]
list1.extend(list2)
print(list1)
list3 = ["a", "b", "c"]
list4 = ["d", "e", "f"]
list3.extend(list4)
print(list3)

# .index() - ამ მეთოდის საშუალებით შეგვიძლია გავიგოთ კონკრეტული ელემენტის მდებარეობა სიაში ინდექსის სახით.
cities = ["New York", "Los Angeles", "Chicago"]
print(cities.index("Chicago"))
cities1 = ["Miami", "Dallas", "Seattle"]
print(cities1.index("Dallas"))

# .insert() - ამ მეთოდის საშუალებით შეგვიძლია დავამატოთ ახალი ელემენტი სიაში კონკრეტულ პოზიციაზე.
numbers = [1, 2, 4, 5]
numbers.insert(2, 3)
print(numbers)
numbers1 = [10, 20, 40, 50]
numbers1.insert(2, 30)
print(numbers1)

# .pop() - ამ მეთოდის საშუალებით შეგვიძლია წავშალოთ ელემენტი სიიდან კონკრეტული პოზიციიდან.
fruits = ["apple", "banana", "orange"]
removed_fruit = fruits.pop(1)
print(removed_fruit)
fruits1 = ["grape", "kiwi", "mango"]
removed_fruit1 = fruits1.pop(0)
print(removed_fruit1)

# .remove() - ამ მეთოდის საშუალებით შეგვიძლია წავშალოთ ელემენტი სიიდან მისი მნიშვნელობით.
colors = ["red", "blue", "green"]
colors.remove("blue")
print(colors)
colors1 = ["yellow", "purple", "orange"]
colors1.remove("purple")
print(colors1)

# .reverse() - ამ მეთოდის საშუალებით შეგვიძლია შევცვალოთ ელემენტების რიგი სიაში საპირისპიროდ.
numbers = [1, 2, 3, 4, 5]
numbers.reverse()
print(numbers)
names = ["Gega", "Nika", "Dato"]
names.reverse()
print(names)

# .sort() - ამ მეთოდის საშუალებით შეგვიძლია დავალაგოთ ელემენტები სიაში ზრდის მიხევდით ან ანბანის მიხედვით.
numbers = [5, 2, 9, 1, 5, 6]
numbers.sort()
print(numbers)
names = ["Gega", "Nika", "Dato"]
names.sort()
print(names)    
# ფუნქცია არის 
