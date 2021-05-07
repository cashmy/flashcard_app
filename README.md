# Coding Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Image Files
I added the ability to "upload" images in both the collections and collectionsType database files.
It stores the images into the MEDIA_ROOT directory of the flashcard_db backend.
   (e.g. D:/D-Documents/devCodeCamp/Week-11/Projects/*flashcard_database/flashcard_db/media* ) 
   
HOWEVER, with a "local instance" - personal computer, Reac (and browser security) will not allow 
an 'external' link to the files unless it is placed in the 'public' directory. 
   (e.g. D:/D-Documents/devCodeCamp/Week-11/Projects/*flashcard_app/public/images* )
   
Neither application allows for "easy" redirection to another directory on the fly.
Once publication to a public server is handled. The issue could be addressed.

The other solution would be to create an intermediate server that can serve up static files.

For the interim, I have placed a "default" image (one for each file). This file is placed in the "assets"
directory and webpack knows to bundle this when compling. 
