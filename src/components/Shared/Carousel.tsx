import { Component, MouseEvent, ReactNode } from "react";

interface IProps {
  images: string[];
  className: string;
}

class Carousel extends Component<IProps> {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event: MouseEvent<HTMLElement>): void => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if (!event.target.dataset.index) return;

    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render(): ReactNode {
    const { active } = this.state;
    const { images, className } = this.props;

    return (
      <div className={"flex justify-center items-center " + className}>
        <img
          data-testid="hero"
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
              data-testid={`thumbnail${index}`}
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
