import logo from "../../img/logo.svg";
//Import Styled
import styled from 'styled-components';


const FixedNav = () => {
	return(
		<StyledNavigation>
			<div className="square">
				<img src={logo} alt="logo-event"/>
			</div>
			<ul className="navlinks">
				<li>SHOWREEL</li>
				<li>COMPÉTENCES</li>
				<li>CLIENTS</li>
				<li>CONTACT</li>
				<li>31.22 CORPO</li>
			</ul>
		</StyledNavigation>
	)
}

//Style
const StyledNavigation = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  .square {
    background-color: black;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 90%;
      max-height: 90%;
    }
  }

	.navlinks{
	  display: flex;
	  width: 50vw;
	  height: 5vh;
	  list-style: none;
	  justify-content: space-around;
	  align-items: center;
	}
`;

export default FixedNav;