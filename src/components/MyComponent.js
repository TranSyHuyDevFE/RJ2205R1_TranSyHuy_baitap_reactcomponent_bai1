import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    text: "Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.",
  };
  render() {
    return (
      <div>
        <div className="alert alert-warning" role="alert">
          {this.state.text}
        </div>
      </div>
    );
  }
}

export default MyComponent;
