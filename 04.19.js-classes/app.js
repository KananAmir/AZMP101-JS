//classes
class Human {
  age;
  //properties
  constructor(name, surname, gender, nationality, age = 0) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.nationality = nationality;
    this.age = age;
  }

  //methods
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
}

class User extends Human {
  isLogged = false;
  constructor(
    name,
    surname,
    gender,
    nationality,
    username,
    email,
    isAdmin,
    password,
    bio,
    age
  ) {
    super(name, surname, gender, nationality, age);
    this.username = username;
    this.email = email;
    this.isAdmin = isAdmin;

    if (password.length < 5) {
      window.alert("password should at least 5 chars!");
      // throw new Error("password should at least 5 chars!");
    } else {
      this.password = password;
    }

    if (bio.length > 100) {
      window.alert("bio should at max 100 chars!");
      // throw new Error("bio should at max 100 chars!");
    } else {
      this.bio = bio;
    }
    // this.isLogged = false;
  }

  // pw: 12345;

  // currPassword: 12345;
  // newPassword: 12345;
  //methods
  changePassword(currentPassword, newPassword) {
    if (this.password === currentPassword) {
      if (currentPassword === newPassword) {
        window.alert("current password and new password are same!");
      } else {
        this.password = newPassword;
      }
    } else {
      window.alert("current password is incorrect!");
    }
  }

  changeEmail(arr, newEmail) {
    let found = arr.find((user) => user.email === newEmail);
    if (found) {
      window.alert("email already in use!");
    } else {
      this.email = newEmail;
    }
  }
}

let users = [
  new User(
    "John",
    "Doe",
    "Male",
    "American",
    "johndoe",
    "john.doe@example.com",
    false,
    "password123",
    "A bit about John.",
    30
  ),
  new User(
    "Jane",
    "Doe",
    "Female",
    "British",
    "janedoe",
    "jane.doe@example.com",
    true,
    "securepassword",
    "Jane's bio goes here.",
    28
  ),
  new User(
    "Alex",
    "Smith",
    "Non-binary",
    "Canadian",
    "alexsmith",
    "alex.smith@example.com",
    false,
    "alexspassword",
    "All about Alex.",
    35
  ),
  new User(
    "Emily",
    "Clark",
    "Female",
    "Australian",
    "emilyclark",
    "emily.clark@example.com",
    false,
    "emilyspassword",
    "Explorer and photographer.",
    26
  ),
  new User(
    "Michael",
    "Brown",
    "Male",
    "German",
    "michaelbrown",
    "michael.brown@example.com",
    true,
    "michaelspass",
    "Coffee enthusiast. Avid reader.",
    32
  ),
  new User(
    "Luis",
    "Gomez",
    "Male",
    "Spanish",
    "luisgomez",
    "luis.gomez@example.com",
    false,
    "luispassword",
    "Music lover, Guitar player.",
    29
  ),
  new User(
    "Sophia",
    "Lopez",
    "Female",
    "Mexican",
    "sophialopez",
    "sophia.lopez@example.com",
    true,
    "sophiaspassword",
    "Digital marketer and content creator.",
    31
  ),
];

// global functions
function sortUsersByUsername(array) {
  return [...array].sort((a, b) => a.username.localeCompare(b.username));
}

function filterByBirthYear(arr, year) {
  return arr.filter((user) => user.getBirthYear() > year);
}
function login(arr, username, password) {
  let found = arr.find((user) => user.username === username);
  if (found) {
    if (found.username === username && found.password === password) {
      let check = arr.some((user) => user.isLogged === true);
      if (check) {
        window.alert("another user currently logged in!");
      } else {
        found.isLogged = true;
        window.alert("successfully logged in!");
      }
    } else {
      window.alert("username or password is incorrect!");
    }
  } else {
    window.alert("user not found!");
  }
}

// login(users, "johndoe", "password123");
// logout(users, "johndoe");
// login(users, "janedoe", "securepassword");

function logout(arr, username) {
  let found = arr.find((user) => user.username === username);
  if (found) {
    if (found.isLogged === true) {
      window.alert("successfully logged out!");
      found.isLogged = false;
    } else {
      window.alert("user did not logged in to log out!");
    }
  } else {
    window.alert("user not found!");
  }
}
function createUser(arr, newUser) {
  arr.push(newUser);
}
function deleteUser(arr, username) {
  let idx = arr.findIndex((user) => user.username === username);
  if (idx === -1) {
    window.alert("no such user!");
  } else {
    arr.splice(idx, 1);
    window.alert(`user deleted successfully`);
  }
}

users[3].changeEmail(users, "code.doe@example.com");

console.log(users);
deleteUser(users, "luisgomez");
console.log(users);
