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

1. id - unique identifier
2. email - user's email, who created this post
3. path - path to the file of the image that the user uploaded to the storage
4. date - publication date of the post to sort it in the query

Screenshot of the posts collection from firestore:
![image](https://user-images.githubusercontent.com/31535378/142015630-1631bf3d-40f6-4fb2-b0a5-c358ed679aa2.png)

Screenshot of uploaded pics from storage in firestore:
![image](https://user-images.githubusercontent.com/31535378/142015807-deee73d6-a28e-4ff3-9b18-4ecd877fdc20.png)

Several screenshots of the application:
1. Page for drawing:
![image](https://user-images.githubusercontent.com/31535378/142017652-f270d903-b3e2-4c82-8431-483ef243d2f8.png)

2. Dashboard page:

![image](https://user-images.githubusercontent.com/31535378/142017758-462ac9ed-b0c9-4111-bb12-2575c2c08bdc.png)

![image](https://user-images.githubusercontent.com/31535378/142017859-cc301f25-5f19-46cf-a462-1d466b48bf0b.png)

3. Sing In page:
 
![image](https://user-images.githubusercontent.com/31535378/142016475-8ea12328-c7e9-4ad2-a341-9c764e28ceeb.png)

5. Sign Up page:

![image](https://user-images.githubusercontent.com/31535378/142016544-dba2fa5f-6d14-4ca5-b059-10ec36165c4e.png)

6. Example of error handling:

![image](https://user-images.githubusercontent.com/31535378/142016793-4369f597-7868-4fad-bc38-d513fba41fcc.png)
