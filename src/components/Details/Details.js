import { Component } from "react";
import Carousel from "../Shared/Carousel";
import ErrorBoundary from "../Shared/ErrorBoundary";
import ThemeContext from "../Shared/ThemeContext";
import Modal from "../Shared/Modal";
import { useParams } from "react-router";

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
      // {
      //     loading: false,
      //     ...json.pets[0],
      // }
    );
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  render() {
    if (this.state.loading) {
      return <h2>loading ...</h2>;
    }

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div className="pb-20 px-40">
        <Carousel className="mb-10" images={images} />
        <h1 className="text-center">{name}</h1>
        <h2 className="text-center">
          {animal} - {breed} - {city}, {state}
        </h2>
        <ThemeContext.Consumer>
          {([theme]) => (
            <button
              className="block rounded px-6 py-2 m-auto text-white hover:opacity-50 border-none"
              onClick={this.toggleModal}
              style={{ backgroundColor: theme }}
            >
              {" "}
              Adopt {name}
            </button>
          )}
        </ThemeContext.Consumer>
        <p className="bg-azure text-lg">{description}</p>
        {showModal ? (
          <Modal>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h2 className="text-3xl">
                      Whould you like to adopt {name}
                    </h2>
                    <button
                      className="p-1 ml-auto bg-transparent opacity-5 border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={this.toggleModal}
                    >
                      <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/* <div className="relative p-6 flex-auto" /> */}
                  <ThemeContext.Consumer>
                    {([theme]) => (
                      <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="mx-5 px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                          style={{ backgroundColor: theme }}
                          onClick={this.adopt}
                        >
                          Yes
                        </button>
                        <button
                          className="mx-5 px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                          style={{ backgroundColor: theme }}
                          onClick={this.toggleModal}
                        >
                          No
                        </button>
                      </div>
                    )}
                  </ThemeContext.Consumer>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </Modal>
        ) : null}
      </div>
    );
  }
}

const DetailsWithErrorBoundary = (props) => {
  return (
    <ErrorBoundary>
      <Details {...props} params={useParams()} />
    </ErrorBoundary>
  );
};

export default DetailsWithErrorBoundary;
