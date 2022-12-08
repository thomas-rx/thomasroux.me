import React from "react";

export class AsciinemaPlayer extends React.Component {
  bindRef = (ref) => {
    this.ref = ref;
  };

  componentDidMount() {
    const { src, autoplay } = this.props;
    window.AsciinemaPlayer.create("casts/" + src, this.ref, {
      loop: true,
      autoplay: autoplay || false,
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
