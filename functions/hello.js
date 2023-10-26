// domain/.netlify/functions/hello
const item = [
  { id: 1, name: "susan" },
  { id: 2, name: "John" },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(item),
  };
};
