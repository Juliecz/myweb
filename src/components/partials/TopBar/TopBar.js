import React from 'react';
import * as Icons from 'react-icons/lib/fa';

import './style.css';

export default () =>
	(<div className="topbar">
		<div className="topbar-lang">
		
		</div>
		<div className="topbar-social">
			<a href="https://www.linkedin.com/in/juliecz" target="_blank">
				<Icons.FaLinkedin
					size={21}
					className="topbar-social-icon"
				/>
			</a>
			<a href="https://github.com/juliecz/" target="_blank">
				<Icons.FaGithub
					size={21}
					className="topbar-social-icon"
				/>
			</a>
			<a href="https://bitbucket.org/juliecz/" target="_blank">
				<Icons.FaBitbucket
					size={20}
					className="topbar-social-icon"
				/>
			</a>
			<a href="https://www.facebook.com/yuliya.ovch" target="_blank">
				<Icons.FaFacebook
					size={20}
					className="topbar-social-icon"
				/>
			</a>
			<a href="https://vk.com/juliecz" target="_blank">
				<Icons.FaVk
					size={21}
					className="topbar-social-icon"
				/>
			</a>
		</div>
	</div>);