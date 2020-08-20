"# app_simply_express" 

# express app with: 
-mongoose (database)
-joi (validating data)
-bcryptjs (crypt password)
-jwt (for cookie)
-jest (testing route)

# 3 route include: 
** Registration **
1)Validate data(name,password,email)
2)Check exist user
3)Create user in DB

** Login **
1)Check exist user
2)Password verifcation
3)Set auth-token

** Posts(look on private data) **
1)Check auth-token
2)Control access to private root
