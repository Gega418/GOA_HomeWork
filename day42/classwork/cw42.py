# 1) შექმენი სეტი სახელად fruits მასში შეინახეთ შესაბამისი 5 მნიშვნელობა. წაშალეთ ერთი ნებისმიერი ხილი, ჩაამატეთ თქვენი საყვარელი ხილი, შექმენით მეორე სეტი სახელად fruits1 შეინახეთ ორი მნიშვნელობა, ეს ორი სეტი ერთმანეთთან გააერთიანეთ და იპოვეთ ამ ორ სეტს შორის განსხვავება.

# 2) დღევანდელ გაკვეთილზე ნასწავლი მეთოდები კომენტარის სახით ახსენით.

# 3) შექმენი dictionary სადაც გექნება: სახელი, გვარი, ასაკი, საყვარელი სპორტი, საბოლოოდ დაბეჭდეთ გასაღებები, მნიშვნელობა და ყველა ერთად.


#1
fruits = {"apple", "banana", "cherry", "strawberry", "blueberry"}
fruits.remove("strawberry")
fruits.add("kiwi")
fruits1 = {"mango", "pineapple"}
combined_fruits = fruits.union(fruits1)
difference = fruits.difference(fruits1)
print(combined_fruits)
print(difference)

#2
# union() - ორი სეტის გაერთიანება
# difference() - ორი სეტის შორის განსხვავების პოვნა
# add() - სეტში ახალი ელემენტის დამატება
# remove() - სეტიდან ელემენტის წაშლა ელემენტის სახელით
# values() - dictionary-ის ყველა მნიშვნელობის მიღება
# keys() - dictionary-ის ყველა გასაღების მიღება
# items() - dictionary-ის ყველა გასაღებისა და მნიშვნელობის წყვილის მიღება

#3
me = {
    "name" : "Gega",
    "surname" : "Pirtskhelava",
    "age" : 21,
    "favorite_sport" : "football"
}

print(me.items())