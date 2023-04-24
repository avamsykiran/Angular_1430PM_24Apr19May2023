Angular 11
-------------------------------------------------------------------------------------------------

Pre-Requisite Skills
        HTML 5
        CSS 3
        Bootstrap 5
        Javascript (ES6)

Lab Setup

    NodeJS                                                          node --version
    VSCode IDE
    Angular CLI             npm install -g @angular/cli@15.2.1      ng version

What is Angular?

    is a SPA framework.
    Single Page Application is a client-side executing UI application model that has one and only one html page.

    Dynamic Web Application

        Server                                          Client/Browser
         Controllers +      <---------REQ-------------
         Views                  the view will
                                generate html
                                on the server
                            --------RESP (html+css)-----> load the received html content 
                                                            afer unloading the prev content if any.



    Single Page Application

        Server                                          Client/Browser    
            SPA-bundle                  <-----First REQ---
            (index.html+ .js + .css)

                    --------RESP (spa-bundle)----------->   index.html + .css + .js

                                                        any events/form submitions/ links
                                                        etc are handled by he JS on the client itself.

                                                        the needed html content is dynamically generated
                                                        on the client itelf and is tailored to the existing
                                                        index.html .

            rest-api    <-----------Data operaton REQ------

                        -----------RESP (.xml / .json)----> 

 Angular,ReactJS,VueJS ...etc., are a few popular SPA frameworks.

 What is NodeJS?

    NodeJS is an javascript execution engine alternate to browser allowing javascript
    to execute in stand alone mode.


    To develop an application we need to

        Compose the code                                    IDE             VSCode
        Compile the code (tranbspelling)  .ts into .js      compiler        babel        
        Test the Code                                       testing tool    karma and jasmine
        Package / Build the code                            build tool      npm
        Deploy / launch on a server

    for executing these tools we need nodejs on the developer machine.

 TypeScript ?

    javascript is a loosly typed language.

        arth.js

            function diff(a,b) {
                return a-b;
            }

            diff(12,4);
            diff(12.3-9.0);
            diff("apple","banana");
            diff(true,false);
            ...etc

    typescript  =   javascript + typeSafty.

        arth.ts

            function diff(a:number,b:number):number{
                return a-b;
            }

            diff(12,4);
            diff(12.3-9.0);


        number
        string
        boolean
        void
        null
        undefined
        any

Angular CLI

    is a frontier or shell to manage our angular application.

    ng version

    ng new app-name

    ng serve                        compile, build and deploy the app on a development server at 4200 port
    ng serve -o                     compile, build and deploy the app on a development server at 4200 port and opens the 
                                    browser pointing the app.
    ng serve --port 8888 -o         compile, build and deploy the app on a development server at 8888 port and opens the 
                                    browser pointing the app.

    ng build                        compile, build and store the built files in 'dist'.
    ng test                         compile, build and run all test cases




