import React from 'react';

import Main from '../components/main';
import Box from '../components/box';
import ExtLink from '../components/extlink';
import Setup from '../components/setup';
import Details from '../components/details';

const Index = () => {
	return (
		<Main>
			<Box>
				<p>Here you can find information about the hardware or software I own and use. Inspired by <ExtLink target="_blank" rel="noopener noreferrer" href="https://uses.tech/">/uses</ExtLink>.</p>
				<Setup/>
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
							<li>2x 24&quot; Dell U2410</li>
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
							<li>iPhone 6 16GB</li>
							<li>YubiKey 5 NFC</li>
							<li><ExtLink target="_blank" rel="noopener noreferrer" href="https://redcanoebrands.com/shop/the-nasa-rocket-science-backpack/">Red Canoe NASA Backpack</ExtLink></li>
						</ul>
					</li>
				</ul>
				<h3>VS Code setup:</h3>
				<Details>
					<summary>
						Settings
					</summary>
					<ul>
						<li>Font: Operator Mono</li>
						<li>Font Size: 17</li>
					</ul>
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
						<li>Babel JavaScript</li>
						<li>Better TOML</li>
						<li>Bracket Pair Colorizer 2</li>
						<li>Color Highlight</li>
						<li>crates</li>
						<li>Docker</li>
						<li>EditorConfig for VS Code</li>
						<li>ES7 React/Redux/GraphQL/React-Native snippets</li>
						<li>gitignore</li>
						<li>GitLens - Git supercharged</li>
						<li>GraphQL</li>
						<li>Highlight Matching Tag</li>
						<li>Image preview</li>
						<li>Markdown All in One</li>
						<li>npm</li>
						<li>npm Intellisense</li>
						<li>Path Autocomplete</li>
						<li>Path Intellisense</li>
						<li>Reload</li>
						<li>Rust (rls)</li>
						<li>Tech Debt Tracker</li>
						<li>Visual Studio IntelliCode</li>
						<li>XO</li>
						<li>YAML</li>
					</ul>
				</Details>
			</Box>
		</Main>
	);
};

export default Index;
