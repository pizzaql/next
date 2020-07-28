import React from 'react';
import {NextPage} from 'next';

import Main from '../components/main';
import ExtLink from '../components/extlink';
import Details from '../components/details';

const Index: NextPage<unknown> = () => {
	return (
		<Main>
			<h1>Uses</h1>
			<p>Here you can find information about the hardware or software I own and use. Inspired by <ExtLink target="_blank" rel="noopener noreferrer" href="https://uses.tech/">/uses</ExtLink>.</p>
			<ul>
				<li>Hardware and Desk
					<ul>
						<li>Computer
							<ul>
								<li>Intel Core I5-4690K</li>
								<li>Nvidia GeForce GTX 750 Ti 4GB</li>
								<li>8GB RAM</li>
								<li>1TB HDD + 128GB SSD</li>
								<li>Linux Mint 19.3</li>
							</ul>
						</li>
						<li>Dell Latitude E7440 Notebook</li>
						<li>2x 24&quot; Dell U2410 Monitor</li>
						<li>Logitech G413 Keyboard</li>
						<li>Logitech MX Master 3 Mouse</li>
						<li>Bose QuietComfort 25 Headphones</li>
					</ul>
				</li>
				<li>Software
					<ul>
						<li>Visual Studio Code</li>
						<li>Google Chrome</li>
						<li>Spotify</li>
						<li>1Password</li>
					</ul>
				</li>
				<li>Personal gear
					<ul>
						<li>iPhone 8 64GB</li>
						<li>YubiKey 5 NFC</li>
						<li><ExtLink target="_blank" rel="noopener noreferrer" href="https://redcanoebrands.com/shop/the-nasa-rocket-science-backpack/">Red Canoe NASA Backpack</ExtLink></li>
						<li>Kross Hexagon X9 2014 Bike</li>
					</ul>
				</li>
			</ul>
			<h3>VS Code setup:</h3>
			<Details>
				<summary>
					Settings
				</summary>
				<p>Check out my <ExtLink target="_blank" rel="noopener noreferrer" href="https://github.com/xxczaki/dotfiles">dotfiles repository</ExtLink>.</p>
			</Details>
			<Details>
				<summary>
					Themes
				</summary>
				<ul>
					<li>Atom One Dark Theme</li>
					<li>Material Icon Theme</li>
				</ul>
			</Details>
			<Details>
				<summary>
					Plugins
				</summary>
				<ul>
					<li>Auto Close Tag</li>
					<li>Auto Rename Tag</li>
					<li>AVA</li>
					<li>Better Comments</li>
					<li>Bracket Pair Colorizer 2</li>
					<li>Code Spell Checker</li>
					<li>Color Highlight</li>
					<li>crates</li>
					<li>Docker</li>
					<li>DotENV</li>
					<li>EditorConfig for VS Code</li>
					<li>ES7 React/Redux/GraphQL/React-Native snippets</li>
					<li>Even Better TOML</li>
					<li>File Utils</li>
					<li>GitLens - Git supercharged</li>
					<li>GraphQL</li>
					<li>GraphQL for VSCode</li>
					<li>Highlight Matching Tag</li>
					<li>Image preview</li>
					<li>JS Refactor</li>
					<li>Markdown All in One</li>
					<li>npm Intellisense</li>
					<li>open in browser</li>
					<li>Path Intellisense</li>
					<li>Rainbow Brackets</li>
					<li>Reload</li>
					<li>Rust</li>
					<li>Scope Info</li>
					<li>SCSS IntelliSense</li>
					<li>Text Pastry</li>
					<li>Toggle Quotes</li>
					<li>Version Lens</li>
					<li>Visual Studio IntelliCode</li>
					<li>vscode-styled-components</li>
					<li>XO</li>
					<li>YAML</li>
				</ul>
			</Details>
		</Main>
	);
};

export default Index;
