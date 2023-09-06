import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}

// Fonksiyonun amacı, Redux store'dan alınan counter durumunu React bileşenine bağlamak için gerekli olan props'u oluşturmak.
function mapStateToProps(state) {
  return { counter: state.counterReducer };
}

// connect fonksiyonu, Redux store ile React bileşenini bağlamak için kullanılır
export default connect(mapStateToProps)(Counter);
