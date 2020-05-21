import React, { Component } from "react";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from "../shared/dishes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDishId: null
    };
  }

  onDishSelect(dishId) {
    console.log(dishId);
    this.setState({ selectedDishId: dishId });
  }

  render() {
    return (
      <div>
        <Header/>
        <Menu
          dishes={this.state.dishes}
          onDishSelect={dishId => this.onDishSelect(dishId)}
        />
        <Dishdetail
          dish={
            this.state.dishes.filter(
              dish => dish.id === this.state.selectedDishId
            )[0]
          }
        />
         <Footer/>
      </div>
    );
  }
}

export default Main;