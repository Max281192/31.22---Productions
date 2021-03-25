import React from 'react';
import {Link} from 'react-router-dom';
//Import Styled
import styled from 'styled-components';

const Nav = () => {
	return (
		<StyledNav>
			<ul>
				<li><Link to="/event" className="event">EVENT</Link></li>
				<li><Link to="/corporate" className="corpo">CORPORATE</Link></li>
			</ul>
		</StyledNav>
	)
}
// Styled
const StyledNav = styled.nav`
  position: absolute;
  bottom: 10%;
  width: 80%;
  height: 30%;
  
  ul{
	display: flex;
	flex-direction: column;
	align-items: center;
	list-style: none;
	
	li{
	  margin: 0.5rem 0;
	  
	  a{
		font-size: 2rem;
		transition: all ease 0.5s;
	  }
	  
	  .event:hover{
		color: deepskyblue;
	  }
	  .corpo:hover{
		color: darksalmon;
	  }
	}
  }
`;

export default Nav;