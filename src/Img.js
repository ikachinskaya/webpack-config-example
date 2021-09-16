class Img extends React.Component {
  render() {
    const { alt, src } = this.props;
    return React.createElement(
      "div",
      { className: "imgWrapper" },
      React.createElement("img", {
        className: "img",
        alt,
        src,
      })
    );
  }
}

module.exports = Img;
