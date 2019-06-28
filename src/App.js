import React, {Component} from 'react';
import data from './data/items.json'
import ItemList from './components/itemList'
import AddItem from './components/addItem.js';
import FilterItems from './components/filterItems.js';
import ToggleAll from './components/toggleAll.js';
import styled from 'styled-components'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

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
    const newAllSelected = newItems.every(item => item.isSelected)
    this.setState({items: newItems, allSelected: newAllSelected})
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

  isEverySelected = list => list.every(item => item.isSelected)

  handleFilter = condition => {
    let newItems = [...this.state.items]
    let newAllSelected = this.state.allSelected
    switch (condition) {
      case 'all':
        newItems = this.state.items.map( item => ({...item, isSelected: true}))
        newAllSelected = this.isEverySelected(newItems)
        break;
      case 'initials':
        newItems = this.state.items.map( item => ({...item, isSelected: item.isInitial}))
        newAllSelected = this.isEverySelected(newItems)
        break;
      case 'added':
        newItems = this.state.items.map( item => ({...item, isSelected: !item.isInitial}))
        newAllSelected = this.isEverySelected(newItems)
        break;
      case 'unselected':
        newItems = this.state.items.map( item => ({...item, isSelected: !item.isSelected}))
        newAllSelected = this.isEverySelected(newItems)
        break;
      case 'completed':
        newItems = this.state.items.map( item => ({...item, isSelected: item.value}))
        newAllSelected = this.isEverySelected(newItems)
        break;
      default:
        break;
    }
    this.setState({items: newItems, allSelected: newAllSelected})
  }

  render(){
    return (
      <Container>
        <Title>To Do's</Title>

        <Header>
          <ToggleAll
          active={this.state.allSelected}
          onClick={this.handleSelectAll}
          />
          <FilterItems onChange={this.handleFilter}/>
        </Header>
        <ItemList 
        list={this.state.items}
        onCheck={this.handleCheckItem}
        onSelect={this.handleSelectItem}
        />
        <AddItem onSubmit={this.handleAddItem}/>
      </Container>
    );
  }
}

export default App;
