# How to Improve a Simple Reactstrap Form Application

We take a form written how you might initially start writing React (basically copying it how you might write something in vanilla HTML5 and Bootstrap
classes) and then leveling it up a little bit.

* In [step 1](https://github.com/eselkin/how-to-improve/tree/main/ex-early-react-1) we look at how a simple app would look with basic JSX 
and a few Reactstrap components (ones you're familiar with from Bootstrap- like Row which corresponds to a div with class="row"). It's simple 
and gets the job done, but it's not easy to add to or update the data.

* In [step 2](https://github.com/eselkin/how-to-improve/tree/main/ex-early-react-2) we identify the patterns that are getting repeated (the FormGroups)
and find we could write a map that provides the same results. But for that we need a [data model](https://github.com/eselkin/how-to-improve/blob/main/ex-early-react-2/src/data/interests.js)
and in that model it's easy to add data and update the display.

* In [step 3](https://github.com/eselkin/how-to-improve/tree/main/ex-early-react-3) we think about, what if we don't just want to get sports interest, but a whole different section "HOBBIES"
and then we update the [data model](https://github.com/eselkin/how-to-improve/blob/main/ex-early-react-3/src/data/interests.js). But with updating the data model we need to update things that were
arrays into objects that can handle multiple types of interests. 

* In [step 4](https://github.com/eselkin/how-to-improve/tree/main/ex-early-react-4) we identify that with this patterns we're still repeating JSX so there must be a way to map something to get the results we need.
for this we use [Object.keys(object).map(function)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) that lets you iterate over the keys of the object, section by section.
In the video we see Eli having a few troubles that come from using React class Components. First, that when you pass a class method to a child component it needs to be bound the the parent's class object (we do this with 
`this.method.bind(this)` and that lets the function be passed and used in the child. We also see that for some reason the state wasn't letting us pass everything to the child component so we had to simplify what gets passed.

* In the [final step](https://github.com/eselkin/how-to-improve/tree/main/ex-early-react-5) we convert the Form component into a function component so we aren't bogged down by the class structure. We introduce [useState](https://beta.reactjs.org/learn/state-a-components-memory#anatomy-of-usestate)
and [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback). The useState hook returns a value and a setter function (we chose state and setState, but they can be called anything). Saving something in state means you can then only re-render the parts of the DOM that change in the state and only when the state actually changes.

* In future steps we could take it to the next level by initially creating an empty object in state for interests like: `useState({interests:{}})` and then in the handleChange function we could create the array for the section if it doesn't yet exist. We could also optimize some other things. Future versions could use a database to save and retrieve things so that you didn't rely on hardcoded data in the interests.js file.
