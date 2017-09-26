myTruck.createOrder({email:'me@goldfinger.com', coffee: 'double mocha'});
myTruck.createOrder({email:'dr@who.com', coffee: 'decaf'});
myTruck.createOrder({email:'m@bond.com', coffee: 'ear grey'});
myTruck.printOrders();
myTruck.deliverOrder('dr@who.com');
myTruck.deliverOrder('m@bond.com');
myTruck.printOrders();
