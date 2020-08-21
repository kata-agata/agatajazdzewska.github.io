// const createCard = ({root, userName, fetchData}) => {
//   root.innerHTML = `
//     <div class="card">
//         <h1 class="title"></h1>
//         <div class="footprint">
//
//         </div>
//         <a class="see-demo"/>
//         <a class="see-code"/>
//     </div>
//   `;
//
//   const card = root.querySelector('.card');
//   const title = root.querySelector('.title');
//
//   const onLoad = async event => {
//     console.log(event);
//     const items = await fetchData();
//     console.log(items);
//   };
//
//   // for(let item of items){
//   //   title.innerHTML = `${item.name}`;
//   // }
//
//   window.addEventListener("load", onLoad);
// }
export default function printMe() {
  cosnole.log('I get called from print.js!');
}
