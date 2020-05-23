import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function StartBtn(props){
	return (
		<button className = "startbtn" onClick = {props.onClick}>
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

function UserInputs(props){
	return (
		<div>
			<WPMField value = {props.wpm} onChange = {props.wpmChange}/>
			<br/>
			<br/>
			<StartBtn className = "startbtn" name = {props.bText} onClick = {props.btnPress}/>
			<br/>
			<label>
				<input type = "radio" name = "textsrc" checked disabled = {props.bText === "End"}/>
				Daily Readings
			</label>
			<label>
				<input type = "radio" name = "textsrc" disabled = {props.bText === "End"}/>
				Custom Text
			</label>
		</div>
	)
}

class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			bText : "Start",
			wpm : 200,
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
				<UserInputs wpm = {this.state.wpm}
						wpmChange = {this.wpmChange}
						bText = {this.state.bText}
						btnPress = {this.btnPress}
				/>
				<h1>{this.state.text[this.state.highlight]}</h1>
				<br/>

				<p>{this.state.text.map(this.highlightWord)}</p>
			</div>
		)
	}
}

ReactDOM.render(<App text = "Somebody once told me the world was gonna roll me. I aint the sharpest tool in the shed. She was looking kinda dumb with her finger and her thumb and the shape of an L on her forehead."/>, document.getElementById("root"));