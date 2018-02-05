import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../img/a.png';

  const Div = styled.div`
  display:grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap:10px;
`;
//
  const Textarea = styled.textarea`
  grid-area: 3/3/4/4;
  background:red;
  `;

 const Input=styled.input`
    grid-area: 2/3/3/4;
    height:80%;
    font: bold 16px 'lucida sans', 'trebuchet MS', 'Tahoma';
    border: 1px solid #ccc;
    -moz-box-shadow: 0 1px 1px #ddd inset, 0 1px 0 #fff;
    -webkit-box-shadow: 0 1px 1px #ddd inset, 0 1px 0 #fff;
    box-shadow: 0 1px 1px #ddd inset, 0 1px 0 #fff;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;      
 `;
const Note = ({ id, text, bg }) => ( <div  style={ { backgroundColor: bg} , {display:'inline-block'} } key={ id }> { text } </div> ); 
 
class Notes extends Component {
	constructor(props) {
    super(props);
    this.state = {notesList: [], 
text: '', 
bg: '#000000', 
search:'' };
this.setText=this.setText.bind(this);
this.setColor=this.setColor.bind(this);
this.addToNotes=this.addToNotes.bind(this);
this.findNote=this.findNote.bind(this);

}

setText(event){ 
this.setState({ text: event.target.value }); 
}

setColor(event){ 
this.setState({ bg: event.target.value }); 
}

addToNotes(){ 
const { notesList, bg, text } = this.state; 

// let newNoteList = notesList.push(noteItem); //use immutable data 
this.setState({ 
notesList: [ ...notesList, { bg, text } ], 
text: '' 
}); 
} 

findNote(event){ 
this.setState({ search: event.target.value.toLowerCase() }); 
} 

render(){ 
const { search, notesList, text } = this.state; 
const fiteredList = !search.length ? notesList : 
notesList.filter( ( item ) => { 
return item.text.indexOf(search) !== -1; 
}); 

return ( 
<Div className="note_edit"> 
<Input type="text" className="search" onChange={ this.findNote } placeholder="Search notes"/> 
<Textarea value={ text } placeholder="write you note" onChange={ this.setText }></Textarea> 
<input type="color" className="background" onChange={ this.setColor }/> 
<button disabled={ !text.length } className="add" onClick={ this.addToNotes }>add note</button> 
<div> { fiteredList.map((el, i) => <Note key={i} bg={el.bg} text={el.text} />) } </div> 
</Div> 
) 
} 
} 
export default Notes;