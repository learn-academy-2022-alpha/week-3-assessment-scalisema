# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: `this` is the command/word/invocation that is ues to call an object in JavaScript.

  Researched answer: The keyword `this` refers to the object that performs the current code section. It refers to the object that is performing the current function. If the reference function is a regular function, "this" refers to the global object. If the fuction is a method inside of an object, `this` refers to the object itself.


2. What is React? Why would you use it?

  Your answer: React is a framework (created by facebook) that allows websites to run and rerun code in an effeiacnt manner which does not required the user to constantly refresh the webpage they are viewing in order to see new content.  It is used because on its scalablity and efficiency.

  Researched answer: React is a front-end library, specifically focused on building user interfaces that are complex and responsive for web applications. If your project involves many components with different, often changing states – active/inactive navigation items, accordion sections expanded/collapsed, dynamic inputs, buttons active/disabled, user login and access permissions – then the project may be a good fit for React. React helps you manage those changing states and dynamically present different views to the user based on state information. Efficiency is one of React’s key points. A big part of its efficiency comes from React’s use of a Virtual DOM. React keeps a virtual copy of the page’s DOM behind the scenes. When a change occurs, React compares the current DOM with the incoming change being very careful to only update what has changed. This causes the browser to only re-render a small part of the page, instead of the entire thing. This makes React much more efficient and great for complex applications where changes occur frequently.



3. Which lifecycle method is required in a React class component?

  Your answer: I honestly wasn't able to recall the lifecycle methods off the top of my head.

  Researched answer:The render() method is required and will always be called, the others are optional and will be called if you define them.



4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer: JSX is essentually a hybrid of Javascript and HTML that is used in React.

  Researched answer:JSX is a Javascript syntax extension used by ReactJS that can write Html-like Java scripts.  HTML is a hypertext language used to create items that appear on the screen, such as lists, divs, and images. JSX, on the other hand, is a JavaScript extension that allows you to create HTML in JavaScript code. The biggest difference between JSX and HTML is that nested JSX returns only one element. In other words, you still need a parent to create sibling items. It is not required for HTML.




5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn seems to install the nessisary componets for React as well as acting as local host servers that allow users to run React applications on their local machines.

  Researched answer:Yarn is the package manager for your code. You can use code to share with other developers around the world. Yarn does this quickly, safely and reliably, so you don't have to worry. Yarn allows you to use other developers' solutions to a variety of problems, making it easier to improve your software. If you encounter a problem, you can report the issue, contribute to GitHub, and once the issue is resolved, you can use Yarn to keep everything up-to-date. The code is released through so-called packages. The package contains all the shared code and the package.json file (called the manifest) that describes the package.

  



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: Either a fuctions without a name or maybe a funcation who's inputs and outputs are modified by other funcations such that its exsistance has been rendered anonymous.

  Researched answer:Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name. An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression.


## Looking Ahead: Terms for Next Week

1. Conditional rendering:A conditional rendering is a piece of content that is displayed or rendered when a predefined condition is met. You can use conditional renderings to control the way visitors view and interact with your website.

2. Props:Props are arguments passed into React components. Props are passed to components via HTML attributes.

3. JavaScript Events: Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them. For example, if the user clicks a button on a webpage, you might want to react to that action by displaying an information box. In this article, we discuss some important concepts surrounding events, and look at how they work in browsers.

4. Object-oriented programming:Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which may contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods.

5. Ruby: Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. Ruby is a pure Object-Oriented language developed by Yukihiro Matsumoto. Everything in Ruby is an object except the blocks but there are replacements too for it i.e procs and lambda. The objective of Ruby’s development was to make it act as a sensible buffer between human programmers and the underlying computing machinery.
