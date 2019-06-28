import React, {Component} from 'react';
import data from './data/items.json'
import Item from './components/item'
import Button from '@material-ui/core/Button';
import AddItem from './components/addItem.js';
import FilterItems from './components/filterItems.js';


class App extends Component {
  state = {
    items: data.items,
    allSelected: false,
  }

  componentDidMount() {
    const newItems = this.state.items.map(item => ({
      ...item,
      isSelected: false,
      isInitial: true,
    }))
    this.setState({items: newItems})
  }

  handleCheckItem = selected => {
    if (selected.value) return
    const newItems = [...this.state.items]
    const changedItem = this.state.items.find(item => item.id === selected.id)
    changedItem.value = !changedItem.value
    this.setState({items: newItems})
  }

  handleSelectItem = selected => {
    const newItems = [...this.state.items]
    const changedItem = this.state.items.find(item => item.id === selected.id)
    changedItem.isSelected = !changedItem.isSelected
    this.setState({items: newItems})
  }

  handleSelectAll = () => {
    const newItems = this.state.items.map( item => ({...item, isSelected: !this.state.allSelected}))
    this.setState({items: newItems, allSelected: !this.state.allSelected})
  }

  handleAddItem = string => {
    if (string == false) return
    const index = this.state.items.length + 1
    const newItem = {
      id: `uuid-${index}`,
      label: string,
      value: false,
      isSelected: false,
      isInitial: false,
    }
    const newItems = [...this.state.items, newItem]
    this.setState({items: newItems})
  }

  handleFilter = condition => {
    let newItems = [...this.state.items]
    switch (condition) {
      case 'all':
        newItems = this.state.items.map( item => ({...item, isSelected: true}))
        break;
      case 'initials':
        newItems = this.state.items.map( item => ({...item, isSelected: item.isInitial}))
        break;
      case 'added':
        newItems = this.state.items.map( item => ({...item, isSelected: !item.isInitial}))
        break;
      case 'unselected':
        newItems = this.state.items.map( item => ({...item, isSelected: !item.isSelected}))
        break;
      case 'completed':
        newItems = this.state.items.map( item => ({...item, isSelected: item.value}))
        break;
      default:
        break;
    }
    this.setState({items: newItems})
  }

  render(){
    return (
      <div className="App">
         <Button variant="contained" onClick={this.handleSelectAll}>
        Select all
      </Button>
      <AddItem onSubmit={this.handleAddItem}/>
      <FilterItems onChange={this.handleFilter}/>
        { 
          this.state.items.map(item => (
            <Item 
            key={item.id}
            selected={item.isSelected}
            label={item.label}
            checked={item.value}
            onCheck={() => this.handleCheckItem(item)}
            onSelect={() => this.handleSelectItem(item)}
            />)
          )
        }
      </div>
    );
  }
}

export default App;
