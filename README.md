# Getting started

Please read README-ReduxMinimal.md file for any setup issues. This project is a clone of redux-minimal.

1. The initial login screen will let you select user role (either Risk Manager or Trader). If you select Trader, you can select trader as well. 	

	Risk Manager View
	Once you login as Risk Manager you would see Traders and Desks as seperate tabs.
	
	Traders Tab
	- Traders tab would contain all the traders. You can edit the trader and change limit.
	- You can also see list of trades booked by a trader by clicking on Trader Name.
	- You can also the row being highlighted if you amend the daily limit or available balance is less than zero.
	- You can also trader traded amount, daily limit, available balance and trader desk details.
	
	Desks Tab
	- Desks tab would contain all the desks available.
	- You can edit the desk, change name and daily limits.
	- You can also total traded amount for desk level.

	
	Trader View
	Trader view has Trades and Book a Trade tab
	
	Trades Tab
	- Trades tab contains the list of trades booked by the trader.
	- It shows trade type, amount, counterparty and you can also edit these fields.
	- It also total traded amount and available amount. If the trader exceeded daily limit, it also shows a message in red.
	
	Book a Trade
	- Using this you can book a trade.
	- Trader id is readonly.
	- You can add values to trade type, amount, counterparty. 
	- On click of save, it redirects back to trade list.
	

	
2. There are three main components, traders, desks and trades. Each of them supports edit, add and list. 

3. The application covers all the features that are requested in the pre-screen test using in memory db.

4. The code is testable, however I have added tests only for traders components. desks and trades tests would be exactly similar to traders (copy+paste). I did not add tests for them to get more time for features.

5. api folder has the initial data generation and mapping between traders, trades and desks.

6. Common folder has util reusable methods to support.

7. I have also added red highligh color to indicate exceeding limits.