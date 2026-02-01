# 1) შექმენით dictionary სახელად student, დაამატეთ მას მონაცემები: name, hobby, height, weight. შემდეგ გამოიყენეთ .get() მეთოდი name-ის მისაღებად და .pop() მეთოდი height-ის წასაშლელად. დაუმატეთ კომენტარები, რას აკეთებს თითოეული მეთოდი

# 2) დაწერეთ ფუნქცია, რომელიც იღებს ლექსიკონს და აბრუნებს მის keys-სა და values-ს .keys() და .values() მეთოდებით. დაბეჭდეთ ორივე შედეგი და დაურთეთ კომენტარები

# 3) შექმენით ლექსიკონი person და გამოიყენეთ .items() მეთოდი, რათა დაბეჭდოთ ყველა key და value წყვილად. გამოიყენეთ loop და კომენტარი დაუმატეთ შედეგს

# 4) შექმენით ლექსიკონი animal, შექმენით მისი ასლი .copy() მეთოდით, შემდეგ კი გამოიყენეთ .clear() ორივეზე (დასაწყისში და ბოლოს დაბეჭდეთ ორივე ლექსიკონი, კომენტარით)

# 5) დაწერეთ ფუნქცია, რომელიც იღებს ლექსიკონს და ამატებს ახალ წყვილს ('age': 14) .update() მეთოდით, შემდეგ კი შლის ბოლო ელემენტს .popitem() მეთოდით. დაბეჭდეთ შედეგი და დაუმატეთ კომენტარები

# 6) რიცხვების სიიდან "numbers = [1, 4, 7, 10, 13, 16, 19]" აირჩიეთ მხოლოდ კენტები, გაამრავლეთ ორზე და დაამატეთ "new_list"-ში, ჯერ "for"-ით, შემდეგ list comprehension-ით. ბოლოს გააკეთეთ 2 მსგავსი მაგალითი: ერთში მხოლოდ მოქმედება გამოიყენეთ, მეორეში მხოლოდ პირობა


#1
student = {
    "Name": "Gega",
    "Hobby": "Football",
    "Height": 173,
    "weight": 63
}

name = student.get("Name")
print(name)
# .get() მეთოდი აბრუნებს მითითებული key-ის მნიშვნელობას

removed_height = student.pop("Height")
print(removed_height)
# .pop() მეთოდი შლის მითითებულ key-ს dictionary-დან

print("Student dictionary:", student)

#2
def show_keys_and_values(dictionary):
    # .keys() მეთოდი აბრუნებს ლექსიკონის ყველა key-ს
    keys = dictionary.keys()
    
    # .values() მეთოდი აბრუნებს ლექსიკონის ყველა value-ს
    values = dictionary.values()
    
    # ვბეჭდავთ key-ებს
    print(keys)
    
    # ვბეჭდავთ value-ებს
    print(values)

student = {
    "name": "Gega",
    "hobby": "football",
    "height": 173,
    "weight": 63
}

show_keys_and_values(student)

#3
person = {
    "name": "Gega",
    "age": 15,
    "city": "Chkhorotskhu",
    "hobby": "football"
}

# .items() მეთოდი აბრუნებს key და value წყვილებს
# loop-ის საშუალებით ვბეჭდავთ თითოეულ key-ს და მის value-ს
for key, value in person.items():
    print(key, ":", value)

#4
animal = {
    "type": "Dog",
    "breed": "Labrador",
    "age": 5
}

# .copy() მეთოდი ქმნის ლექსიკონის ასლს
animal_copy = animal.copy()

# .clear() მეთოდი შლის ყველა ელემენტს ლექსიკონიდან
animal.clear()

print("Original animal dictionary:", animal)
print("Copied animal dictionary:", animal_copy)

#5
def modify_dictionary(dictionary):
    # .update() მეთოდი ამატებს ახალ key-value წყვილს
    dictionary.update({"age": 14})
    
    # .popitem() მეთოდი შლის ბოლო ელემენტს
    dictionary.popitem()
    
    return dictionary

person = {
    "name": "Gega",
    "age": 15,
    "city": "Chkhorotskhu",
    "hobby": "football"
}

modified_person = modify_dictionary(person)
print("Modified person dictionary:", modified_person)

#6
numbers = [1, 4, 7, 10, 13, 16, 19]
new_list = []
for i in numbers:
    if i % 2 != 0:
        new_list.append(i * 2)

print(new_list)

# List comprehension-ით
new_list_comp = [i * 2 for i in numbers if i % 2 != 0]

print(new_list_comp)
