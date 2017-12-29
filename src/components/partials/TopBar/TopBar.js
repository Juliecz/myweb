import React from 'react';
import * as Icons from 'react-icons/lib/fa';

import './style.css';

export default () =>
	(<div className="topbar">
		<div className="topbar-lang">
		
		</div>
		<div className="topbar-social">
			<a href="https://www.linkedin.com/in/juliecz">
				<Icons.FaLinkedin
					size={23}
					className="topbar-social-icon"
				/>
			</a>
			<a href="https://github.com/juliecz/">
				<Icons.FaGithub
					size={23}
					className="topbar-social-icon"
				/>
			</a>
			<a href="https://bitbucket.org/juliecz/">
				<Icons.FaBitbucket
					size={23}
					className="topbar-social-icon"
				/>
			</a>
			<a href="https://www.facebook.com/yuliya.ovch">
				<Icons.FaFacebook
					size={23}
					className="topbar-social-icon"
				/>
			</a>
			<a href="https://vk.com/juliecz">
				<Icons.FaVk
					size={23}
					className="topbar-social-icon"
				/>
			</a>
		</div>
	</div>);