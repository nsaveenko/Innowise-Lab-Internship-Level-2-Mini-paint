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
![image](https://user-images.githubusercontent.com/31535378/142665179-bb169a92-ddd5-4bda-afc6-d470d1eb8a49.png)
![image](https://user-images.githubusercontent.com/31535378/142665223-bbe4b172-ebcf-4723-90ec-dce7deeb6a08.png)
![image](https://user-images.githubusercontent.com/31535378/142665267-38ffee5d-8624-40b8-b014-4253812833d4.png)

2. Dashboard page:

![image](https://user-images.githubusercontent.com/31535378/142665437-d35f3476-97fa-4d08-b810-7ffbc0b3a69e.png)
![image](https://user-images.githubusercontent.com/31535378/142665626-02a92c63-ed68-434a-82a6-7a08fe044e42.png)

3. Sing In page:
 
![image](https://user-images.githubusercontent.com/31535378/142016475-8ea12328-c7e9-4ad2-a341-9c764e28ceeb.png)

5. Sign Up page:

![image](https://user-images.githubusercontent.com/31535378/142016544-dba2fa5f-6d14-4ca5-b059-10ec36165c4e.png)

6. Example of error handling:

![image](https://user-images.githubusercontent.com/31535378/142016793-4369f597-7868-4fad-bc38-d513fba41fcc.png)

7. Mobile version: 

![image](https://user-images.githubusercontent.com/31535378/142665789-6eb93541-c91d-42dd-bf0b-0eeaedb368ce.png)
![image](https://user-images.githubusercontent.com/31535378/142665821-1c7b4036-3ed5-4bb5-b4c9-94e0724b535b.png)

