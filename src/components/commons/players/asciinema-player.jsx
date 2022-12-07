import React from "react";

export class Asciinema extends React.Component {
  bindRef = (ref) => {
    this.ref = ref;
  };

  componentDidMount() {
    window.AsciinemaPlayer.create("casts/" + this.props.src, this.ref, {
      loop: true,
      autoplay: false,
      preload: true,
      rows: 25,
      poster: "npt:0:1",
      theme: "asciinema"
    });
  }

  render() {
    return <div ref={this.bindRef} />;
  }
}
