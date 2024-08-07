# Angular Todo

# Steps to create app

1. Create new app by command **ng** **new** [APP NAME]  

```
>ng new todo
```

1. Open app in Visual Studio Code by command **code .**

```
>code .
```

1. Configure your project add necessary packages or libraries that you want to use. In this app we are going to use bootstrap so we will install that and configure that.

```
>npm i bootstrap
```

1. add bootstrap in **angular.json** file.

```json
"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
```

1. We required following components in our app.
    1. Navbar Component
    2. Footer Component
    3. Category Component
    4. Todo Component

```
>ng g c layouts/navbar
>ng g c layouts/footer
>ng g c category
>ng g c todo
```

1. Now add navbar and footer in **app.component.html** file.

```html
<app-navbar></app-navbar>
<router-outlet></router-outlet>
<app-footer></app-footer>
```

1. Add **`<app-navbar>`** and **`<app-footer>`** in **app.component.ts** file.

```tsx
import { RouterOutlet } from '@angular/router';
**import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';**

imports: [RouterOutlet,**NavbarComponent,FooterComponent**],
```

1. We have to set routing so open **app.routes.ts** file.

```tsx
import { CategoryComponent } from './category/category.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
    {path:'',component:CategoryComponent},
    {path:'todo',component:TodoComponent}
];
```

1. Let’s create drop shadow and add to Global CSS so open **styles.css** file.

Bckground Url: [https://bit.ly/2JYs7gB](https://bit.ly/2JYs7gB)

```css
body{
    background-image: url('assets/Bckground.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.drop-shadow{
    -webkit-box-shadow: 0px 0px 33px -10px rgba(71,114,254,0.3);
    -moz-box-shadow: 0px 0px 33px -10px rgba(71,114,254,0.3);
    box-shadow: 0px 0px 33px -10px rgba(71,114,254,0.3);
}

input[type = text]{
    background-color: #fefefe;
    height: 60px;
    padding-left: 20px;
}

.btn-todo{
    height: 60px;
    background-color: #e9eeff;
    color: #4772ef;
    border: none;
}
```

For generating box shadow Go to [https://www.cssmatic.com/box-shadow](https://www.cssmatic.com/box-shadow)

Horizontal Length : 0px

Vertical Length : 0px

Blur Radius : 33px

Spread Radius : -10px

Shadow Color : #4772fe

Background Color : #ffffff  [default]

Box Color : #e7a61a [default]

Opacity : 0.3

1. Design the navbar so open the **navbar.component.html** file.

```html
<header class="drop-shadow">
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-md-auto">
                <h5 class="text-primary brand">Todo App</h5>  
            </div>
        </div>
    </div>
</header>
```

1. Let’s add Navbar CSS so open navbar.component.css file.

```css
header{
    height: 100px;
    padding-top: 30px;
    padding-bottom: 20px;
    margin-bottom: 50px;
}

.brand{
    background-color: #f3f6ff;
    padding: 10px 50px;
    border-radius: 50px;
    cursor: pointer;
}
```

1. Now let’s design footer so open **footer.component.html** file.

```html
<footer class="drop-shadow">
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-md-auto text-center">
                <h6 class="text-primary brand">Todo App</h6>
                <p>copyright © Todo App</p>  
            </div>
        </div>
    </div>
</footer>
```

1. Let’s add CSS to footer so open **footer.component.css** file.

```css
footer{
    height: 100px;
    padding-top: 30px;
    padding-bottom: 20px;
}
```

1. Now let’s design AppComponent so open **app.component.html** file.

```html
<app-navbar></app-navbar>

**<div class="app">
    <div class="container">**
        <router-outlet></router-outlet>
    **</div>
</div>**

<app-footer></app-footer>
```

1. Add CSS to App Component so open **app.component.css** file.

```css
.app{
    min-height: 100vh;
}
```

 We have used font-awesome library so add that also fire this command.

[Using a Package Manager | Font Awesome Docs](https://docs.fontawesome.com/web/setup/packages) [https://docs.fontawesome.com/web/setup/packages](https://docs.fontawesome.com/web/setup/packages)

```html
>npm install --save @fortawesome/fontawesome-free
```

1. Now let’s design category component so open **category.component.html** file.

```
<div class="row justify-content-center md-3">
    <div class="col-md-4 text-center">
        <h1>TODO CATEGORIES</h1>
        <p class="text-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <form action="" class="form-inline">
            <div class="row">
                <div class="col-md-10 form-group">
                    <input type="text" name="categoryName" class="form-control-plaintext drop-shadow" placeholder="Add New Categories here" id="">
                </div>
                <button type="submit" class="btn btn-primary col-md-2 btn-todo btn-block drop-shadow">Add</button>
            </div>
        </form>
    </div>
</div>

<div class="row categories-list">
    <div class="col-md-3">
        <div class="card drop-shadow">
            <div class="card-body">
                <div class="clearfix">
                    <div class="float-start">
                        <div class="badge badge-primary">CATEGORY</div>
                    </div>
                    <div class="float-end cat-tools">
                        <small> <i class="fa fa-pencil-alt text-success"></i> </small>
                        <small> <i class="fas fa-trash text-danger"></i> </small>
                    </div>
                </div>
                
                <div class="todo-content">
                    <h3>Category</h3>
                    <small class="text-secondary">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    </small>
                </div>
                <span class="badge badge-danger">3 - Todos</span>
            </div>
        </div>
    </div>
</div>
```

1. Add CSS in Category Component so to do that **category.component.css** file.

```css

.card{
    border: none;
    border-left: 5px solid #0000;
    margin-top: 50px;
    border-top-left-radius: 30px;
}

.badge-primary{
    background-color: #e9eeff;
    color: #4772fe;
}

.badge-danger{
    background-color: #e9eeff;
    color: #f04141;
    margin-top: 50px;
}

.cat-tools{
    display: none;

}

.cat-tools i {
    margin: 0px 5px;
    cursor: pointer;
}

.categories-list .card:hover{
    cursor: pointer;
    background-color: #f8f8f8;
}

.categories-list .card:hover .cat-tools {
    display: inline;
}
```

1. Let’s design Todo Component so open todo.component.html file

```html
<div class="row justify-content-center md-3">
    <div class="col-md-4 text-center">
        <h1>TODOS</h1>
        <p class="text-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <form action="" class="form-inline">
            <div class="row">
                <div class="col-md-10 form-group">
                    <input type="text" name="todoText" class="form-control-plaintext drop-shadow" placeholder="Add New Todos here" id="">
                </div>
                <button type="submit" class="btn btn-primary col-md-2 btn-todo btn-block drop-shadow">Add</button>
            </div>
        </form>
    </div>
</div>

<div class="row todo-list justify-content-center">
    <div class="col-md-6 ">
        <div class="card">
            <div class="card-body">
                <div class="clearfix">
                    <div class="float-start text-secondary">
                        <i class="far fa-circle text-danger"></i>
                        <i class="fas fa-check text-success"></i>
                        New Todo
                    </div>

                    <div class="float-end">
                        <i class="far fa-check-circle text-success"></i>
                        <i class="far fa-times-circle text-danger"></i>
                        <div class="todo-tools">
                            <small>
                                <i class="fas fa-pencil-alt text-warning "></i>
                                <i class="fas fa-trash text-danger"></i>
                            </small>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
```

1. Add CSS to Todo Component so open **todo.component.css** file.

```css
.todo-list{
    margin-top: 50px;
}

.todo-list .card{
    border: none;
    margin-top: 5px;
    background-color: #f8f8f8;
}

.todo-tools{
    display: none;
}

.todo-tools i{
    margin: 0px 5px;
    cursor: pointer;
}

.todo-list .card:hover{
    cursor: pointer;
    width: 600px;
    height: 80px;
    margin-left: -30px;
    border-top-left-radius: 30px ;
    border-bottom-right-radius: 30px ;
}

.todo-list .card:hover .todo-tools{
    display: inline;
}

i {
    margin-right: 20px;
}
```