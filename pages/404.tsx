import React from 'react';
import {NextPage} from 'next';
import useTranslation from 'next-translate/useTranslation';

const Index: NextPage<unknown> = () => {
	const {t} = useTranslation('404');

	return (
		<h1>{t('message')}</h1>
	);
};

export default Index;
