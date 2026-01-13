<<<<<<< HEAD
# 1)შექმენით 5 ელემენტიანი Tuple და unpacking ის გამოყენებით თითოეულ ელემენტს მიანიჭეთ შესაბამისი ცვლადი

# 2)ახსენით კომენტარებით რა არის tuple და რით განსხვავდება ის list ისგან

# 3)შექმენით 6 ელემენტიანი tuple და გამოიყენეთ .index() და .count() მეთოდები

# 4) კომენტარებით ახსენით რა არის *rest


#1
my_tuple = (7, 10, 15, 18, 21)
a, b, c, d, e = my_tuple
print(a)
print(b)
print(c)
print(d)
print(e)

#2
# Tuple არის მონაცემთა კოლექცია, რომლის შეცვლაც არ შეგვიძლია (immutable). list კი არის მონაცემთა კოლეცქცია რომლის შეცვლა და დამატება შესაძლებელია (mutable).

#3
another_tuple = (1, 2, 3, 2, 4, 2)
index_of_3 = another_tuple.index(3)
count_of_2 = another_tuple.count(2)
print(index_of_3)
print(count_of_2)

#4
=======
# 1)შექმენით 5 ელემენტიანი Tuple და unpacking ის გამოყენებით თითოეულ ელემენტს მიანიჭეთ შესაბამისი ცვლადი

# 2)ახსენით კომენტარებით რა არის tuple და რით განსხვავდება ის list ისგან

# 3)შექმენით 6 ელემენტიანი tuple და გამოიყენეთ .index() და .count() მეთოდები

# 4) კომენტარებით ახსენით რა არის *rest


#1
my_tuple = (7, 10, 15, 18, 21)
a, b, c, d, e = my_tuple
print(a)
print(b)
print(c)
print(d)
print(e)

#2
# Tuple არის მონაცემთა კოლექცია, რომლის შეცვლაც არ შეგვიძლია (immutable). list კი არის მონაცემთა კოლეცქცია რომლის შეცვლა და დამატება შესაძლებელია (mutable).

#3
another_tuple = (1, 2, 3, 2, 4, 2)
index_of_3 = another_tuple.index(3)
count_of_2 = another_tuple.count(2)
print(index_of_3)
print(count_of_2)

#4
>>>>>>> 217e13265442f77198ae78d8644909733855d02c
# *rest არის unpacking ტექნიკა, რომელიც საშუალებას გვაძლევს ერთ ცვლადში შევინახოთ tuple ან list ის დანარჩენი ელემენტები, რომლებიც არ არიან პირდაპირი unpacking ის ნაწილი.