## Component Hierarchy

**Sign-Up Container**
 - Sign Up - AuthForm

 **Log-In Container**
  - Log Up - AuthForm

**Nav Container**
  - Feed(Logo)
  - Search
  - Explore
  - Likes Index
  - User Profile
  - Upload Photo

**Feed Container**
 - Posts
  - post item
  - comments Index
   * comment Item
  - comments form

**User Profile Container**
 - User Info
  - User Items
  - User Posts
    * User post Items

**User Edit Container**
  - Edit Form





## Routes

|Path                                       | Component              |
|-------------------------------------------|------------------------|
| "/sign-up"                                | "Sign Up "             |
| "/log-in"                                 | "Log In"               |
| "/"                                       | "Feed"                 |
| "/users/:userId"                          | "User Profile"         |
| "/users/:userId/edit"                     | "User Edit"            |
