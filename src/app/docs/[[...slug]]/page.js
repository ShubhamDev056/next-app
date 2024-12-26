import React from "react";

const Docs = ({ params }) => {
  console.log(params.slug);
  if (params.slug?.length == 2) {
    return (
      <h1>
        viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length == 1) {
    return <h1>viewing docs for feature {params.slug[0]}</h1>;
  }
  return <div>Docs home</div>;
};

export default Docs;
