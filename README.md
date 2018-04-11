#  **Invester - Democratizando Investimentos**

### **Setting up the Project Folder**

* Open a cmd window/terminal and move to the conFusion folder.
At the prompt type:

`npm instal`

* This will install the lite-server node module to your project.
* Next, initialize a Git repository in the project folder, and then set up a .gitignore file with the contents as shown below:

`node_modules`

### **Downloading Bootstrap**

* You will use npm to fetch the Bootstrap files for use within your project. At the prompt, type the following to fetch Bootstrap files to your project folder:

`npm install bootstrap@4.0.0-alpha.6 --save`

* This will fetch the Bootstrap files and store is in your node_modules folder in a bootstrap folder. The bootstrap->dist folder contains the precompiled Bootstrap CSS and JS files for use within your project.
* Open your project folder in your editor, and then open the index.html file in the conFusion folder. This is your starting web page for the project. We have already created the web page with some content to get you started. We will use Bootstrap to style this web page, and learn Bootstrap features, classes and components along the way.
* Start your lite-server by typing **npm start** at the prompt. The index.html file should now be loaded into your default browser.

###  **Getting your Web page Bootstrap ready**

* Open the *index.html* file in your favourite text editor. If you are using Visual Studio Code, Brackets, Sublime Text or similar editors, you can open the project folder in the editor and then view index.html.
* Insert the following code in the `<head>` of *index.html* file before the title.

```html
<!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
```

* This will include Bootstrap CSS into your web page. Note the subtle change in the fonts of the content of the web page. This is the Bootstrap typography effect coming into play. The default Bootstrap typography sets the font to Helvetica Neue and selects the appropriate font size based on the choice of the heading style and paragraph style for the content.
* At the bottom of the page, just before the end of the body tag, add the following code to include the JQuery library, tether library and Bootstrap's Javascript plugins. Bootstrap by default uses the JQuery Javascript library for its Javascript plugins. Hence the need to include JQuery library in the web page.

```html
<!-- jQuery first, then Tether, then Bootstrap JS. -->
<script src="node_modules/jquery/dist/jquery.min.js"></script>
<script src="node_modules/tether/dist/js/tether.min.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
```

### **Bootstrap Grid System and Responsive Design**

Bootstrap is designed to be mobile first, meaning that the classes are designed such that we can begin by targeting mobile device screens first and then work upwards to larger screen sizes. The starting point for this is first through media queries. We have already added the support for media queries in the last lesson, where we added this line to the head:

`<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">`

The viewport meta tag ensures that the screen width is set to the device width and the content is rendered with this width in mind. This brings us to the second issue, designing the websites to be responsive to the size of the viewport. This is where the Bootstrap grid system comes to our aid. Bootstrap makes available four sizes, xs for extra small, sm for small, md for medium and lg for large screen sizes. We have already seen the basics of responsive design. In this exercise, we will employ the Bootstrap grid classes to design the websites. We would like our website to have the content stacked on extra small devices, but become horizontal within each row for smaller devices and beyond. Towards this goal, we will make use of the classes `.col-*`, `.col-sm-*`, `col-md-*`, and `.col-lg-*` for defining the layouts for the various device sizes. We can specify how many columns each piece of content will occupy within a row, all adding up to 12 or a multiple thereof.

###  **Using a Container class**

* We use the container class to keep content within a fixed width on the screen, determined by the size of the screen. The alternative is to use the container-fluid class to make the content automatically to span the full width of the screen. We will discuss further about this when we discuss the Bootstrap grid system in the next lecture. Add the container class to the first div right after the `</header>` in the file as follows.

`<div class="container"> ...`

###  **Dividing the content into rows**

* Let us now add the class row to the first-level inner *div* elements inside the container. This organizes the page into rows of content. In the next exercise, we will see how we can add other classes to the rows.

` <div class="row"> ...`

### **Creating a Jumbotron**

* Let us add the class jumbotron to the header class as shown below. This turns the header element into a Bootstrap component named Jumbotron. A jumbotron is used to showcase key content on a website. In this case we are using it to highlight the name of the restaurant.

` <header class="jumbotron"> ... `

* In the header add a **container** class to the first inner div and a row class to the second inner div.

###  **Creating a footer**

* Finally, in the footer add a **container** class to the first inner div and a row class to the second inner div.

### **Applying column classes within each row**

* In the header row, we will display the restaurant name and the description to occupy 8 columns, while we will leave four columns for displaying the restaurant logo in the future. Let us go into the jumbotron and define the classes for the inner divs as follows:

```html
<div class="col-12 col-sm-8"> ... </div>
<div class="col col-sm"> ... </div>
```

* For the remaining three div rows that contain content, let us define the classes for the inner divs as follows:

```html
<div class="col-sm-4 col-md-3"> ... </div>
<div class="col-sm col-md"> ... </div>
```

* For the footer, let us define the classes for the inner divs as follows:

```html
<div class="col-5 col-sm-2"> ... </div>
<div class="col-6 col-sm-5"> ... </div>
<div class="col col-sm-4"> ... </div>
<div class="col-auto"> ... </div>
```

Now you can see how the web page has been turned into a mobile-first responsive design layout.

# **Scss**

### **Adding Scss Variables**

* Open the *conFusion* project in a text editor of your choice. In the css folder, create a file named styles.scss. We will add the Scss code into this file.
* Add the following Scss variables into the file:

```scss
$lt-gray: #ddd;
$background-dark: #512DA8;
$background-light: #9575CD;
$background-pale: #D1C4E9;

// Height variables
$carousel-item-height: 300px;
```

We have just added a few color and a height variable. We will make use of these variables while defining the classes.

### **Scss Mixins**

* Next we add a mixin into the file as follows:

```scss
@mixin zero-margin($pad-up-dn, $pad-left-right) {
	margin:0px auto;
	padding: $pad-up-dn $pad-left-right;
}
```
We will make use of this to define several row classes next.

* Using the variables and Mixin class that we defined earlier, add the following row classes to the file:

```scss
.row-header{
    @include zero-margin(0px,0px);
}

.row-content {
    @include zero-margin(50px,0px);
    border-bottom: 1px ridge;
    min-height:400px;
}

.footer{
    background-color: $background-pale;
    @include zero-margin(20px, 0px);
}
.jumbotron {
    @include zero-margin(70px,30px);
    background: $background-light ;
    color:floralwhite;
}

address{
    font-size:80%;
    margin:0px;
    color:#0f0f0f;
}

body{
    padding:50px 0px 0px 0px;
    z-index:0;
}

.navbar-inverse {
    background-color: $background-dark;
}
.tab-content {
    border-left: 1px solid $lt-gray;
    border-right: 1px solid $lt-gray;
    border-bottom: 1px solid $lt-gray;
    padding: 10px;
}
```

Note the use of the variables and the mixin with various parameters in defining the classes.

### **Nesting Selectors**

* Next we add a carousel class to illustrate the use of nesting of classes in Scss, as follows:

```scss
.carousel {
    background:$background-dark;

    .carousel-item {
        height: $carousel-item-height;
        img {
            position: absolute;
            top: 0;n
            left: 0;
            min-height: 300px;
        }
    }
}
#carousel-button {
    right:0px;
    position: absolute;
    bottom: 0px;
}
```

### **Installing and using the node-sass module**

* Now we install the node module to support the compilation of the Scss file to a CSS file. To do this, type the following at the command prompt:

`npm install --save-dev node-sass`

This will install the *node-sass* NPM module into your project and also add it as a development dependency in your package.json file.

* Next open your package.json file and add the following line into the scripts object there. This adds a script to enable the compilation of the Scss file into a CSS file:

`"scss": "node-sass -o css/ css/"`

* In order to transform the Scss file to a CSS file, type the following at the prompt:

`npm run scss`

# **NPM Scripts Part 1** #

### **Watching for Changes and Parallelshell**

* First, we install two NPM packages *onchange* and *parallelshell* as follows:

`npm install --save-dev onchange parallelshell`

* Then, add the following two script items to *package.json*:

```js
"watch:scss": "onchange 'css/*.scss' -- npm run scss",
"watch:all": "parallelshell 'npm run watch:scss' 'npm run lite'"
```

* You will also update the start script as follows:

`"start": "npm run watch:all",`

* Then, type the following at the prompt to start watching for changes to the SCSS file, compile it to CSS, and run the server:

`npm start`

* Now, whenever you make any changes to styles.scss file, it will automatically be compiled to the corresponding css file.




