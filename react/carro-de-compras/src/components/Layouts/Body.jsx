import { Component } from "react";

const styles = {
	layout: {
		backgroundColor: '#fff',
		color: '#0A283E',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column'
	},
	container: {
		width: '1200px'
	}
}

class Body extends Component {
	render() {
		return (
			<div style={styles.layout}>
				<div style={styles.containers}>

					{this.props.children}

				</div>
			</div>
		)
	}
}

export default Body