function Greeting({ name = "World", children }) {
  return (
    <>
      <h4>Exercise 1</h4>
      <h1>
        Hello {name}
        {children}
      </h1>
    </>
  );
}
export default Greeting;
