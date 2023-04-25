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


    ng generate <resourceType> <ResourceName>
    ng g <resourceType> <ResourceName>

        ng g module ModuleName
        ng g component ComponenetName 
        ng g directive DirectiveName 
            ...etc.,

        'c' is short cut for component
        '--skip-tests' can be used to skip test cases.



Angular Archetecture

    An angular application generally is made up of

        1. Modules
        2. Directives
        3. Components
        4. Services
        5. Pipes
        6. Guards
        7. Interceptors

        Each of these resources is a typescript class.
        Each of these resource classes are marked with a decorator. 
        Each decorator is given a json object called meta-data, as config info of the resource.

        Modules

            A modules is a logical group of components,directives,pipes,services and other sub-modules.

            @NgModule({
                declarations:[ /* mention list of components, directives and pipes that come under this module */ ],
                imports:[ /* mention the list of sub-modules */ ],
                exports:[ /* mention the list of resource owned by this module and allowed to be accessed outside this module */],
                providers:[ /* mention list of services that come under this module */ ],
                bootstrap:[ /* list of components that must be instatiated along with the module */]
            })
            class SalesModule {}

            Each angular application resides inside a top-level module called ROOT MODULE named as 'AppModule'.
            All other modules should live inside the ROOT MODULE and those are called FEATURE MODULES.

            'exports' section is absent for ROOT MODULE.
            'bootsrap' section is absent for all modules except the ROOT.

        Component

            Angular supports html extendability. It means that we can create our own html elements and attributes.
            html elements created in angular are called COMPONENTS.
            html attributes created in angular are called DIRECTIVES.

            component   =       component class         +       template            +       style
                                    typescript                   html                          css
                                fields and methods              

            <dashboard></dashboard>

                dashboard.component.ts
                        @Component({
                            selector:'dashboard',
                            templateUrl:'dashboard.component.html',
                            styleUrls:['dashboard.component.css']
                        })
                        class DashboardComponent {
                            title:string;

                            construcotr(){
                                this.title = "Smart Indian MART";
                            }
                        }

                dashboard.component.html

                        <h4>{{title}}</h4>

                dashboard.component.css

                        h4 {
                            background-color:'black';
                            color:'white'
                        }

                Data Binding

                    is the machanisim that guides how to access the fields and methods of a component class in the
                    component template.

                    Interpolation

                        {{angular-expression}}

                    Two-Way Data Binding

                        is used to handling input from the user. two data bidnign work with form elements only.

                        An attribute directive called 'ngModel' from 'FormsModule' is used for two-way data binding.
                        'FormsModule' is from '@angular/forms'.

                        <input type="text" [(ngModel)]="field" />

                    One-Way Data Binding
                        Attribute Binding
                        Event Binding
                        Style Binding
                        Css Class Binding


        Directive

            @Directive({

            })
            class HighlighterDirective {}

        Pipe

            @Pipe({

            })
            class ConvertUnitPipe {}

        Service 

            @Injectable({

            })
            class EmployeeService {}


