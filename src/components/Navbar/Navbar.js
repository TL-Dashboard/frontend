import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger/index";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<NavbarWrap>
				<div className='menu'>
					<Burger open={open} setOpen={setOpen} />
				</div>
				<div className='title'>User Name</div>
      </NavbarWrap>
      
		</>
	);
};

const NavbarWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 80px;
	background-color: #1b212c;
	color: white;
	@media screen and (min-width: 636px) {
		display: none;
	}
	.menu {
		margin: 0 10px;
		order: 1;
	}
	.title {
		display: flex;
		justify-content: center;
	}
`;

export default Navbar;
