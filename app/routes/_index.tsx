import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
	return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
	return (
		<div className=''>
			<h1 className=' tw-text-3xl tw-font-bold tw-text-grey-900 tw-underline'>Hello World!</h1>
		</div>
	);
}
