const root = document.getElementById('root');

class TextBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      articleTitle,
      firstPar = 'забыл передать текст',
      secondPar = 'забыл передать текст',
      headingLevel = 1
    } = this.props;
    return React.createElement(
      'article',
      {},
      React.createElement(`h${headingLevel}`, { }, articleTitle),
      React.createElement('p', {}, firstPar),
      React.createElement('p', {}, secondPar)
    );
  }
}

const reactElem = React.createElement(TextBlock, {
  articleTitle: 'ЗАголовок',
  firstPar: 'lorem ipsum',
  headingLevel: 4
});

const reactElem1 = React.createElement(TextBlock);
const reactElem2 = React.createElement(TextBlock);

ReactDOM.render(reactElem, root);
