/*
  HelloCullen is a component
  Components are functions that return JSX ("HTML-ish" code)

  Conventions:
    -Components are PascalCase'd
    -One component per file
*/

function HelloCullen() {
  return (
    <>
      <h1>Hello Cullen!!!</h1>
      <h2>How you doing??</h2>
    </>
  );
}

// In node, we do:
// module.exports = HelloCullen;

// Client side (React):
export default HelloCullen;
