// //1
// console.log("Step 1: Starting the program");
// console.log("Step 2: Doing some work");
// console.log("Step 3: Finishing up");

// //2
// console.log("Before long calculation");
// for (let i = 0; i < 500000000; i++) {
  
// }
// console.log("After long calculation");

// //3
// let x = 10;
// let y = 20;
// let sum = x + y;
// console.log(sum); // 30
// let name = "Alice";
// let greeting = "Hello, " + name;
// console.log(greeting); // Hello, Alice

// //4
// console.log("Starting");
// setTimeout(() => {
//  console.log("This appears after 2 seconds");
// }, 2000);'
// console.log("Ending");

// //3.1
// function fibonacci(n) {
//  if (n <= 1) return n;
//  return fibonacci(n -- 1) + fibonacci(n -- 2);
// }
// console.log("Calculating...");
// let result = fibonacci(40); // This will take several seconds
// console.log("Result:", result);
// console.log("Done!");

// //I/o
// fetch('https://api.example.com/data')
//  .then(response => response.json())
//  .then(data => console.log(data));
// console.log("Request sent, but not waiting!");

// //4
// console.log("1. Program starts");
// setTimeout(() => {
//  console.log("2. This runs after 2 seconds");
// }, 2000);
// console.log("3. Program continues immediately");

// //Multiple Times
// console.log("Open CGC Portal");
// setTimeout(() => {
//  console.log("Header loaded");
// }, 1000);
// setTimeout(() => {
//  console.log("Student data loaded");
// }, 2000);
// setTimeout(() => {
//  console.log("Footer loaded");
// }, 500);
// console.log("Portal structure ready");

// //Real-time
// function submitForm() {
//  console.log("Submitting form...");

//  setTimeout(() => {
//  console.log("Form submitted successfully!");
//  console.log("Redirecting to dashboard...");
//  }, 1500);

//  console.log("Please wait...");
// }
// submitForm();

// //callback function
// function greet(name, callback) {
//  console.log("Hello, " + name);
//  callback(); // Execute the callback
// }
// function sayGoodbye() {
//  console.log("Goodbye!");
// }
// greet("Alice", sayGoodbye);

// //Callbacks with Asynchronous Operations
// function fetchStudentData(studentId, callback) {
//  console.log("Fetching data for student ID:", studentId);

//  // Simulate database delay
//  setTimeout(() => {
//  let studentData = {
//  id: studentId,
//  name: "Rahul Sharma",
//  course: "Computer Science"
//  };

//  console.log("Data fetched successfully!");
//  callback(studentData); // Pass data to callback
//  }, 2000);
// }
// function displayStudent(data) {
//  console.log("Displaying student:");
//  console.log("Name:", data.name);
//  console.log("Course:", data.course);
// }
// fetchStudentData(101, displayStudent);

// //Real problem
// function serviceVehicle(carModel, phoneNumber) {
//  console.log("Received", carModel, "for service");
//  console.log("Customer can leave now");

//  setTimeout(() => {
//  console.log("Service complete!");
//  phoneNumber(); // Call the customer back
//  }, 3000);
// }
// function customerCallback() {
//  console.log("📞 Ring ring! Your car is ready!");
//  console.log("Customer returns to pick up car");
// }
// serviceVehicle("Honda City", customerCallback);

// //pymarid
// unction changeColor(color, delay, callback) {
//  setTimeout(() => {
//  document.body.style.backgroundColor = color;
//  console.log("Changed to", color);
//  if (callback) callback();
//  }, delay);
// }

// changeColor("red", 1000, () => {
//  changeColor("orange", 1000, () => {
//  changeColor("green", 1000, () => {
//  changeColor("blue", 1000, () => {
//  console.log("All colors done!");
//  });
//  });
//  });
// })

// //Registration
// function registerUser(username, callback) {
//  setTimeout(() => {
//  console.log("User registered:", username);
//  callback();
//  }, 1000);
// }
// function sendVerificationEmail(callback) {
//  setTimeout(() => {
//  console.log("Verification email sent");
//  callback();
//  }, 1000);
// }
// function updateDatabase(callback) {
//  setTimeout(() => {
//  console.log("Database updated");
//  callback();
//  }, 1000);
// }
// function sendWelcomeSMS(callback) {
//  setTimeout(() => {
//  console.log("Welcome SMS sent");
//  callback();
//  }, 1000);
// }

// //Registration
// getData((err, data) => {
//  if (err) {
//  console.error("Error in getData");
//  } else {
//  processData(data, (err, result) => {
//  if (err) {
//  console.error("Error in processData");
//  } else {
//  saveData(result, (err, saved) => {
//  if (err) {
//  console.error("Error in saveData");
//  } else {
//  console.log("Success!");
//  }
//  });
//  }
//  });
//  }
// });

// //promises
// t myPromise = new Promise((resolve, reject) => {
//  // Asynchronous operation here
//  let success = true;

//  if (success) {
//  resolve("Operation successful!"); // Fulfill the promise
//  } else {
//  reject("Operation failed!"); // Reject the promise
//  }
// });

// //1
// let downloadFile = new Promise((resolve, reject) => {
//  console.log("Download started...");

//  setTimeout(() => {
//  if (internetSpeed === "fast") {
//  resolve("File downloaded successfully!");
//  } else {
//  reject("Download failed: Slow internet");
//  }
//  }, 2000);
// });
// console.log("Download initiated");
// console.log(downloadFile); // Promise { <pending> }

// //2
// unction saveToDatabase(data) {
//  return new Promise((resolve, reject) => {
//  console.log("Saving to database...");

//  setTimeout(() => {
//  let dbAvailable = true;

//  if (dbAvailable) {
//  resolve({
//  message: "Data saved successfully",
//  id: 12345,
//  timestamp: new Date()
//  });
//  } else {
//  reject("Database connection failed");
//  }
//  }, 1500);
//  });
// }
// let savePromise = saveToDatabase({ name: "John", age: 25 });
// console.log(savePromise); // Promise { <pending> }
// //3
// let promise = new Promise((resolve, reject) => {
//  setTimeout(() => {
//  resolve("Success! Data is here.");
//  }, 1000);
// });
// promise.then((message) => {
//  console.log(message); // "Success! Data is here."
// })

// //catch
// let promise = new Promise((resolve, reject) => {
//  setTimeout(() => {
//  reject("Error! Something went wrong.");
//  }, 1000);
// });
// promise.catch((error) => {
//  console.log(error); // "Error! Something went wrong."
// });

// //2
// let loginStatus = "success"; // Try changing to "failure"
// let loginPromise = new Promise((resolve, reject) => {
//  setTimeout(() => {
//  if (loginStatus === "success") {
//  resolve("Login successful! Welcome back.");
//  } else {
//  reject("Login failed! Invalid credentials.");
//  }
//  }, 1500);
// });
// loginPromise
//  .then((message) => {
//  console.log("right ", message);
//  console.log("Redirecting to dashboard...");
//  })
//  .catch((error) => {
//  console.log("wrong ", error);
//  console.log("Please try again.");
//  });

//  //API
//  function fetchUserProfile(userId) {
//  return new Promise((resolve, reject) => {
//  console.log("Fetching user profile...");

//  setTimeout(() => {
//  if (userId > 0) {
//  resolve({
//  id: userId,
//  name: "Priya Sharma",
//  email: "priya@example.com",
//  role: "Student"
//  });
//  } else {
//  reject("Invalid user ID");
//  }
//  }, 2000);
//  });
// }
// // Success case
// fetchUserProfile(101)
//  .then((user) => {
//  console.log("User found!");
//  console.log("Name:", user.name);
//  console.log("Email:", user.email);
//  })
//  .catch((error) => {
//  console.log("Error:", error);
//  });
// // Failure case
// fetchUserProfile(--1)
//  .then((user) => {
//  console.log("User found!", user);
//  })
//  .catch((error) => {
//  console.log("Error:", error); // This will run
//  });

//  //finally
//  let loadingSpinner = true;
// fetchData()
//  .then((data) => {
//  console.log("Data:", data);
//  })
//  .catch((error) => {
//  console.log("Error:", error);
//  })
//  .finally(() => {
//  loadingSpinner = false;
//  console.log("Loading complete - hide spinner");
//  });

//  //promise chaining
//  unction step1() {
//  return new Promise((resolve) => {
//  setTimeout(() => {
//  console.log("Step 1 complete");
//  resolve("Data from step 1");
//  }, 1000);
//  });
// }
// function step2(previousData) {
//  return new Promise((resolve) => {
//  setTimeout(() => {
//  console.log("Step 2 complete");
//  console.log("Received:", previousData);
//  resolve("Data from step 2");
//  }, 1000);
//  });
// }
// function step3(previousData) {
//  return new Promise((resolve) => {
//  setTimeout(() => {
//  console.log("Step 3 complete");
//  console.log("Received:", previousData);
//  resolve("Final result");
//  }, 1000);
//  });
// }
// // CLEAN PROMISE CHAIN ✨
// step1()
//  .then((result1) => {
//  return step2(result1);
//  })
//  .then((result2) => {
//  return step3(result2);
//  })
//  .then((finalResult) => {
//  console.log("All done!", finalResult);
//  })
//  .catch((error) => {
//  console.log("Error at some step:", error);
//  });

//  //1
//  changeColor("red", 1000, () => {
//  changeColor("orange", 1000, () => {
//  changeColor("green", 1000, () => {
//  changeColor("blue", 1000, () => {
//  console.log("Done!");
//  });
//  });
//  });
// });

// //2
// function changeColorPromise(color, delay) {
//  return new Promise((resolve) => {
//  setTimeout(() => {
//  document.body.style.backgroundColor = color;
//  console.log("Changed to", color);
//  resolve();
//  }, delay);
//  });
// }
// // Clean, flat, readable!
// changeColorPromise("red", 1000)
//  .then(() => {
//  return changeColorPromise("orange", 1000);
//  })
//  .then(() => {
//  return changeColorPromise("green", 1000);
//  })
//  .then(() => {
//  return changeColorPromise("blue", 1000);
//  })
//  .then(() => {
//  console.log("All colors complete!");
//  })
//  .catch((error) => {
//  console.log("Error:", error);
//  });

//  //real world
//  registerUser("john_doe", () => {
//  sendVerificationEmail(() => {
//  updateDatabase(() => {
//  sendWelcomeSMS(() => {
//  console.log("Registration complete!");
//  });
//  });
//  });
// });

// //3
// function registerUser(username) {
//  return new Promise((resolve) => {
//  setTimeout(() => {
//  console.log("User registered:", username);
//  resolve(username);
//  }, 1000);
//  });
// }
// function sendVerificationEmail(username) {
//  return new Promise((resolve) => {
//  setTimeout(() => {
//  console.log("Verification email sent to", username);
//  resolve(username);
//  }, 1000);
//  });
// }
// function updateDatabase(username) {
//  return new Promise((resolve) => {
//  setTimeout(() => {
//  console.log("Database updated for", username);
//  resolve(username);
//  }, 1000);
//  });
// }
// function sendWelcomeSMS(username) {
//  return new Promise((resolve) => {
//  setTimeout(() => {
//  console.log("Welcome SMS sent to", username);
//  resolve(username);
//  }, 1000);
//  });
// }
// // Beautiful, readable chain!
// registerUser("john_doe")
//  .then(sendVerificationEmail)
//  .then(updateDatabase)
//  .then(sendWelcomeSMS)
//  .then((username) => {
//  console.lo🎉g(" Registration complete for", username);
//  })
//  .catch((error) => {
//     console.log("Registration failed:", error);
//  });

//  //ex 1
//  function checkResult(marks) {
//  return new Promise((resolve, reject) => {
//  setTimeout(() => {
//  if (marks >= 40) {
//  resolve("Passed! Congratulations!");
//  } else {
//  reject("Failed. Better luck next time.");
//  }
//  }, 1000);
//  });
// }
// // Test it
// checkResult(75)
//  .then((message) => console.log(message))
//  .catch((error) => console.log(error));

//  //2
//  function login(username) {
//  return new Promise((resolve) => {
//  setTimeout(() => {
//  console.log("Logged in as", username);
//  resolve(username);
//  }, 1000);
//  });
// }
// function fetchProfile(username) {
//  return new Promise((resolve) => {
//  setTimeout(() => {
//  resolve({ username: username, bio: "Web Developer" });
//  }, 1000);
//  });
// }
// function fetchPosts(profile) {
//  return new Promise((resolve) => {
//  setTimeout(() => {
//  resolve({
//  profile: profile,
//  posts: ["Post 1", "Post 2", "Post 3"]
//  });
//  }, 1000);
//  });
// }
// // Chain them together
// login("alice_dev")
//  .then(fetchProfile)
//  .then(fetchPosts)
//  .then((data) => {
//  console.log("Profile:", data.profile);
//  console.log("Posts:", data.posts);
//  })
//  .catch((error) => console.log("Error:", error));

//  //3
//  function randomOperation() {
//  return new Promise((resolve, reject) => {
//  setTimeout(() => {
//  let random = Math.random();
//  if (random > 0.5) {
//  resolve("Success! Random value: " + random);
//  } else {
//  reject("Failed! Random value: " + random);
//  }
//  }, 1000);
//  });
// }
// randomOperation()
//  .then((message) => console.log("right", message))
//  .catch((error) => console.log("wrong", error));