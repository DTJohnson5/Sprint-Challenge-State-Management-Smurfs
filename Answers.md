1. What problem does the context API help solve?

It helps to solve the problem of props drilling by allowing you to share props or state with an indirect child or parent.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions modify the state of an array, the store holds the information sent through the state value, and the reducers process the action through the acceptance of the previous state while making a new one.

The store is referred to as the "single source of truth" because it "stores" the state of the entire app in a single object tree.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

The main difference between Application and Component states is the storage medium - Application is stored globally whereas Component is stored on a local machine. The best time to choose one over the other depends on whether you are passing props... When passing props becomes uncontrollable, you should switch to the Application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk is a type of middleware which allows us to return functions through well-written created action(s).

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Though I needed 15 bottles of Visine to rehydrate my eye after all the videos I had to watch, Redux is the better of the two styles because it gives you better control over the content while also painlessly granting more power in the case that multiple designers have to work on larger apps.