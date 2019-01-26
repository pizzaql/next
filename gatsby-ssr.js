import {ServerStyleSheet} from 'styled-components';
import {renderToString} from 'react-dom/server';

export const replaceRenderer = ({
	bodyComponent,
	replaceBodyHTMLString,
	setHeadComponents
}) => {
	const sheet = new ServerStyleSheet();
	const body = renderToString(sheet.collectStyles(bodyComponent));

	replaceBodyHTMLString(body);
	setHeadComponents([sheet.getStyleElement()]);
};
