import React from "react";

type Props = {};

// utilicen la extensión ES7+ React/Redux/React-Native snippets
// luego ponen tsrfce y le dan tab para que cree el dommy del archivo 👍

function Test({}: Props) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <p className="text-xs text-slate-800">hola</p>
    </>
  );
}

export default Test;
