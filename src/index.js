import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function StartBtn(props){
	return (
		<button onClick = {props.onClick}>
		{props.name}
		</button>
	)
}

function WPMField(props){
	return (
		<label>
		<input id = "input" onChange = {props.onChange} value = {props.value}/>
		words per minute.
		</label>
	)
}

class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			bText : "Start",
			wpm : 150,
			interval : null,
			text : props.text.split(" "),
			highlight : 0
		}
		this.wpmChange = this.wpmChange.bind(this);
		this.btnPress = this.btnPress.bind(this);
		this.highlightWord = this.highlightWord.bind(this);
		this.nextWord = this.nextWord.bind(this);
	}

	wpmChange(e){
		this.setState({wpm: e.target.value});
	}
	nextWord(){
		//make sure highlight doesnt exceed the word count
		if(this.state.highlight < this.state.text.length)
			this.setState({highlight: this.state.highlight + 1});
		else{
			//end idk xd, reset back to the first word
			this.setState({highlight:0});
			this.btnPress({target:{innerHTML:"End"}});
		}
	}
	btnPress(e){
		const v = e.target.innerHTML;
		if(v==="Start"){
			const interval = setInterval(this.nextWord,(60 / this.state.wpm) * 1000);

			this.setState({
				bText:"End",
				interval: interval
			});
		}else{
			clearInterval(this.state.interval);
			this.setState({
				bText:"Start",
				interval : null
			});
		}
		console.log(this.state);
	}
	highlightWord(word, key){
		if(key === this.state.highlight){
			return <span style = {{color:"red"}}>{word + " "}</span>;
		}else{
			return word + " ";
		}
	}
	render(){
		return (
			<div>
			<WPMField value = {this.state.wpm} onChange = {this.wpmChange}/>
			<br/>
			<br/>
			<StartBtn name = {this.state.bText} onClick = {this.btnPress}/>
			<br/>
			<h1>{this.state.text[this.state.highlight]}</h1>
			<br/>
			<p>{this.state.text.map(this.highlightWord)}</p>
			</div>
		)
	}
}

ReactDOM.render(<App text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum nisi et sodales hendrerit. Etiam at fringilla tortor."/>, document.getElementById("root"));