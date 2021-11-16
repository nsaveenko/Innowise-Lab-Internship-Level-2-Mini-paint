Task: https://docs.google.com/document/d/1K79_NA4lMYfqQiIJGqLDek1K9z-oc2qg8n4AvrN1PXE/edit

To build and run this application you need to execute these commands:

1. npm install
2. npm run start

To open the application follow link in browser "http://localhost:3000"

Application stack:
1. A Version 4 UUID - a universally unique identifier that is generated using random numbers (for todos id)
2. Toaster - React notifications
3. HexColorPicker - React color picker

Database snapshot: I'm using the collection, called 'posts', which included post items. Post items consist of several fields:

id - unique identifier
email - user's email, who created this post
path - path to the file of the image that the user uploaded to the storage
date - publication date of the post to sort it in the query