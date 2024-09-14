import { createClient } from 'redis';  // Import the createClient function from the redis package

const client = createClient();  // Create a new Redis client instance

client.on('error', err => console.log('Redis Client Error', err));  // Attach an event listener for the 'error' event to handle any Redis client errors
await client.connect();  // Connect to the Redis server asynchronously

// SET different Key and Value seperatly using set Command
const user_one = await client.set('user:1', 'Vaibhav');  // Set a key 'user:1' with the value 'Vaibhav' in Redis and store the result
const user_two = await client.set('user:2', 'Sanskar'); // Set a key 'user:2' with the value 'Sanskar' in Redis and store the result
const user_three = await client.set('user:3', 'Akshat'); // Set a key 'user:3' with the value 'Akshat' in Redis and store the result

console.log(user_one);          // Log the result of setting 'user:1'
console.log(user_two);          // Log the result of setting 'user:2'
console.log(user_three);        // Log the result of setting 'user:3'

// Set multiple key-value pairs at once
const users = await client.mSet([
    ["user:1","Vaibhav"],
    ["user:2","Sanskar"],
    ["user:3","Akshat"]
  ]);

// log the result 
console.log(users);  

// Retrieve multiple values by their keys using mGet Command
const fetched_users = await client.mGet(["user:1","user:2", "user:3"]);
console.log(fetched_users);  

// Counter on strings

await client.set("number", 0);   // Set the key 'number' with an initial value of 0
const inc_one = await client.incr("number"); // Increment the value of 'number' by 1
console.log(inc_one); // Log the result of incrementing 'number' by 1
const inc_ten = await client.incrBy("number", 10); // Increment the value of 'number' by 10
console.log(inc_ten); // Log the result of incrementing 'number' by 10





