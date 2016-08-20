import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';
import { Link } from 'react-router'
import {Card,CardTitle,CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import {Tabs, Tab} from 'material-ui/Tabs';
import map from '../map';
import Chip from 'material-ui/Chip';
import RaisedButton  from 'material-ui/RaisedButton';


function removeplayer(){


}

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {menuOpen: false, tab: 'game'};

  }
  startgame(){
  }
  @autobind
  tabChange(tab){
    this.setState({
      tab: tab,
    });
  };


  render() {
var number = 0;
    return (
      <div>
        <Card>
          <CardTitle title={this.props.games.game.game + " ("+this.props.games.session+")"}/>
          <Tabs value={this.state.tab}onChange={this.tabChange} >
            <Tab label="Game" value="game">
              <div>
              <p id ="demo">


              Number of players in current lobby : '{React.Children.count(this.props.games.game.members)}' // <- why this no work


              </p>
             <p id ="role">


             {(() => {
                    switch (this.props.games.game.game){
                      case "Mafia":   return "ayy";
                      case "Spyfall": return "lmao";


                      default:      return "Error";
                    }
                  })()}
             </p>

              </div>
            </Tab>
            <Tab label="Players" value="players">
              <div>
                <List >

                  {_.map(this.props.games.game.members, (member, key) => (
                    <ListItem primaryText={member} />
                  ))}

                </List>

              </div>
            </Tab>
          </Tabs>
        </Card>
      </div>


    );

  }
}

export default map(Game);