/* 
*
* Exercise 3:
* Add the Display component from below to your project and rewrite it using Hooks
*
*/

function Display() {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  return (
    <NumberContext.Consumer>
      {value => <div>The answer is {value}.</div>}
    </NumberContext.Consumer>
  );
}