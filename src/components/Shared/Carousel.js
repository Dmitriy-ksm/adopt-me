import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images, className } = this.props;

    return (
      <div className={"flex justify-center items-center " + className}>
        <img
          className="w-4/12 inline-block"
          src={images[active]}
          alt="animal"
        />
        <div className="w-6/12 ml-2 flex-col flex-wrap inline-block">
          {images.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handleIndexClick}
              className={
                "rounded-full h-32 w-auto inline-block " +
                (index === active ? "active" : "")
              }
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
