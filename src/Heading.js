class Heading extends React.Component {

  // обязательно для компонента
  render() {
    console.log(this.props);
    // достаем из ящика наши настройки
    const { givenId, givenTitle , children, headingLevel } = this.props;
    // обязательно возвращаем React.createElement 
    return React.createElement(
      `h${headingLevel}`,
      { className: 'header-title', id: givenId , title: givenTitle},
      ...children
    );
  }
}

module.exports = Heading;
