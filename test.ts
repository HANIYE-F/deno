Deno.test("Simple Math Test", () => {
  if (1 + 1 !== 2) throw new Error("Test failed!");
});


Deno.test("Hello String Test", () => {
  const greeting = "Hello Deno";
  if (!greeting.includes("Deno")) throw new Error("Test failed!");
});
