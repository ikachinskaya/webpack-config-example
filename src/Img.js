class Img extends React.Component {
  render() {
    const { id, alt, src } = this.props;
    console.log(this.props);
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
