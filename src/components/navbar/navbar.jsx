import Logo from '../../images/logo.jpeg';

const Navbar = () => {
  return (
		<>
			<div className='nav-bg'>
				<div className="nav">
					<div className="logo">
						<img src={Logo} alt="logo" className="w-50" />
					</div>

					<div className="links">
						<div className="link-group">
							<a href="#">Features</a>
						</div>

						<div className="link-group">
							<a href="#">Pricing</a>
						</div>

						{/* <div className="link-group">
							<a href="#">Blog</a>
						</div> */}

						<div className="link-group">
							<a href="#">Changelog</a>
						</div>
					</div>

					<div>
						<button>Login</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;