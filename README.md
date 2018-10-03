# rin

**Summary:** Rin is an app that I built recently using Expo, Firebase Realtime Database, and Firebase Storage. Inspired by a jar of notes from my girlfriend and encouraged by a family friend to try out expo, I started working on this project in September of 2018. 

**Objective:** Recreate my version of a jar of notes and practice using new tools


[**Home Screen:**](screenshots/Screen%20Shot%202018-09-29%20at%2011.10.23%20PM.png)
The home screen consists of a cheesy combination of names and a photo collage. My navigation at the bottom has two other screens (One for text notes and another for photo notes). There is also a hidden touchable opacity for me to access the screen for adding text notes and photo notes to the database. 

![alt text](https://github.com/KungPaoMushu/rin/blob/master/screenshots/Screen%20Shot%202018-09-29%20at%2011.10.23%20PM.png)





[**Hidden Screen:**](https://github.com/KungPaoMushu/rin/blob/master/screenshots/Screen%20Shot%202018-09-29%20at%2011.11.25%20PM.png
)
This screen is accessed by touching a small portion of the display and is used to add items to the Firebase Realtime Database and Firebase Storage. "Add Items" is for adding text notes for the Rainy Day screen and after entering text and submitting, the data is pushed to the database. "Add Image" opens the phones photo gallery and uploads a selected image to Firebase Storage and then adds the filename and download URL to the database. 

![alt text](https://github.com/KungPaoMushu/rin/blob/master/screenshots/Screen%20Shot%202018-09-29%20at%2011.11.25%20PM.png
)

[**Rainy Screen:**](https://github.com/KungPaoMushu/rin/blob/master/screenshots/Screen%20Shot%202018-10-02%20at%201.17.00%20PM.png
)
Rainy Screen is for displaying random text notes. When the button is pressed, a random entry from the items database is selected and displayed. 

![alt text](https://github.com/KungPaoMushu/rin/blob/master/screenshots/Screen%20Shot%202018-10-02%20at%201.17.00%20PM.png)

Memories Screen for photo notes is also currently set up and is able to display a random image from the database based on the Firebase Storage downlaod url, but I am also using dummy photos right now. 

