// import "./page";

// 1
// console.log(_.join([1, 2, 3, 4], '==='));

// 2
// import _ from 'lodash';
// console.log(_.join([1, 2, 3, 4], '==='));

// 3.
// import(
//   /* webpackChunkName: 'lodash' */
//   "lodash"
// ).then((_) => {
//   console.log(_.join([1, 2, 3, 4], "==="));
// });


document.addEventListener('click', () => {
  import(
    /* webpackChunkName: "lodash" */
    /* webpackPreload: true */
    "lodash"
  ).then(({ default: _ }) => {
    document.body.append(_.join([1, 2, 3], '__'))
  });
});