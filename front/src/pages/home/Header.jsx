import logo from "../../../public/logo.png";

const titleStyle = {
		fontFamily: "Montserrat",
		fontStyle: "normal",
		fontWeight: 800,
		fontSize: "16px",
		lineHeight: "30px",
		letterSpacing: "0.01em",
		textAlign: "center",
		color: "white"
}

export default function Header() {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid" style={{ background: "#EA394E", height: "5em", marginTop: -10, padding: 10 }}>
				<img 
					src={logo} 
					className="navbar-brand" 
					alt="logo" 
					style={{
						marginLeft: 20,
						width: "2.3em",
						height: "2.2em" 
					}} 
					/>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<h1
								style={titleStyle}
							>
								Gerenciador de Aluno
							</h1>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
