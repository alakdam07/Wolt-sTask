import React, { Component } from "react";
import data from "./Data/data.json";

export class Restaurent extends Component {
  state = {
    data: data
  };

  sortByFirst(search) {
    let sortedRestaurent = [...data.restaurants].sort((a, b) => {
      if (a[search] < b[search])
        // Put a first
        return -1;
      if (a[search] > b[search])
        // Put b first
        return 1;
      return 0;
    });
    this.setState({
      data: {
        ...this.state.place,
        restaurants: sortedRestaurent
      }
    });
  }

  sortBylast(search) {
    let sortedRestaurent = [...data.restaurants].sort((a, b) => {
      if (b[search] < a[search])
        // Put a first
        return -1;
      if (b[search] > a[search])
        // Put b first
        return 1;
      return 0;
    });
    this.setState({
      data: {
        ...this.state.place,
        restaurants: sortedRestaurent
      }
    });
  }
  render() {
    return (
      <React.Fragment>
        <button
          style={{ margin: "10px" }}
          className="waves-effect pink waves-light btn-small"
          onClick={() => this.sortByFirst("name")}
        >
          sort a - z
        </button>

        <button
          className="waves-effect pink waves-light btn-small"
          onClick={() => this.sortBylast("name")}
        >
          sort z - a
        </button>
        <br></br>
        <br></br>

        {this.state.data.restaurants.map((restaurent, index) => {
          return (
            <div
              style={{ display: "inline-flex", textAlign: "center" }}
              key={index}
            >
              <div className="row">
                <div class="col s12">
                  <div className="col s12 m6">
                    <div
                      className="card"
                      style={{ width: "350px", background: "black" }}
                    >
                      <div className="card-image">
                        <img
                          src={restaurent.image}
                          alt="img"
                          style={{ width: "350px", height: "200px" }}
                        />
                        <span
                          className="card-title"
                          style={{ fontWeight: "bold", textAlign: "left" }}
                        >
                          {restaurent.name}
                        </span>
                      </div>
                      <div className="card-content">
                        <p
                          className="animated fadeIn delay-1s white-text"
                          style={{
                            textAlign: "left",
                            fontFamily: "sans-sarif",
                            fontSize: "20px"
                          }}
                        >
                          {restaurent.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Restaurent;
