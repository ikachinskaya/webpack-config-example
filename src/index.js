// React;
// ReactDOM;
const Heading = require('./Heading');

const container = document.getElementById('root');

const element = React.createElement( Heading ,
  { givenId: 'first', givenTitle: '12354', headingLevel: 3 },
  'text ' , React.createElement('span', {}, 'yes'), ' test'
);

// создаем компонент и ложим в ящик props все настройки и детей этого элемента
const element2 = React.createElement( Heading ,
  { givenId: 'second', givenTitle: 'текст'},
  'любой'
);

// console.log(element);

ReactDOM.render(element, container);

// ReactDOM.render(element2, container);
