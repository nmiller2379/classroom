users = [
    {"name": "Alice", "active": True},
    {"name": "Bob", "active": False},
    {"name": "Carol", "active": True}
]

active_users = [user for user in users if user["active"]] 
# [{'name': 'Alice', 'active': True}, {'name': 'Carol', 'active': True}] 

# print(active_users) 

def is_active(user):
    return user["active"]

active_users = list(filter(is_active, users))
# [{'name': 'Alice', 'active': True}, {'name': 'Carol', 'active': True}]

print(active_users)

active_users = list(filter(lambda user: user["active"], users))
# [{'name': 'Alice', 'active': True}, {'name': 'Carol', 'active': True}]


users = [
    {"name": "Alice", "active": True},
    {"name": "Bob", "active": False},
    {"name": "Carol", "active": True}
]
emails = [user["name"] + "@example.com" for user in users]
# ['Alice@example.com', 'Bob@example.com', 'Carol@example.com']

print(emails)

def to_email(user):
    return user["name"] + "@example.com"

emails = map(to_email, users)
print(emails)
# ['Alice@example.com', 'Bob@example.com', 'Carol@example.com']

# emails = list(map(lambda user: user["name"] + "@example.com", users))
# # ['Alice@example.com', 'Bob@example.com', 'Carol@example.com']

# votes = ["Alice", "Bob", "Alice", "Alice", "Bob"]
# results = {}

# for name in votes:
#     if name in results:
#         results[name] += 1
#     else:
#         results[name] = 1

# print(results)  

# votes = ["Alice", "Bob", "Alice", "Alice", "Bob"]
# results = {}

# for name in votes:
#     results[name] = results.get(name, 0) + 1

# print(results)  # {'Alice': 3, 'Bob': 2}




# from collections import Counter

# votes = ["Alice", "Bob", "Alice", "Alice", "Bob"]
# results = Counter(votes)
# print(results)  # Counter({'Alice': 3, 'Bob': 2})


