var ActivityList = React.createClass({
  getInitialState: function() {
    return {name:"test"};
  },
  handleClick:function(e){
    alert(e.target.name);
  },
  render:function(){
    return (
      <ul>
        {this.props.data.map(function(game){
         return <li onClick={this.handleClick} name={game.name}>{game.name}</li>;
        })
      }
      </ul>);
  }
});
this.props.data.map(function(game) {
  return <li onClick={this.handleClick} name={game.name}>{game.name}</li>;
}, this);