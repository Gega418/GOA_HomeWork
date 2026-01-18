# 1) შექმენი სეტი სახელად freands_goa სადაც ჩაწერთ დაახლოებით ხუთ ადამიანს რომლებიც გოაში გაიცანით და დამეგობრდით, შექმენით მეორე ცვლადი სახელად freands სადაც შეიყვანთ 5 მეგობარს რომლებიც გოაში შემოსვლამდე გაიცანით, ეს ორი სეტი გააერთიანეთ ერთმანეთთან და იპოვეთ მათ შორის განსხვავება.

# 2) შექმენით სეტი სახელად cars სადაც გადაცემთ რამოდენიმე მანქანის მოდელს საბოლოოდ წაშალეთ ყველაზე ნაკლებად რომელიც არ მოგწონთ ის და დაამატეთ თქვენი საუკეთესო მანქანის მოდელი.

# 3) შექმენი dictionary სადაც გექნებათ: სახელი, გვარი, საკვარელი მანქანა და საყვარელი პროგრამირების აკადემია საბოლოოდ დაბეჭდეთ საყვარელი მანქანის მნიშვნელობა.


#1
friends_goa = {"Giorgi", "Nikoloz", "Sandro", "Nika", "Gio"}
friends = {"Gio", "Saba", "Dato", "Temo", "Tornike"}
print(friends_goa.union(friends))
print(friends_goa.difference(friends))

#2
cars = {"BMW", "Audi", "Toyota", "Mazda"}
cars.remove("Mazda")
cars.add("Mercedes")
print(cars)

#3
my_info = {
    "name": "Gega",
    "surname": "Pirtskhelava",
    "fav_car": "Mercedes",
    "fav_academy": "GOA"
}
print(my_info["fav_car"])