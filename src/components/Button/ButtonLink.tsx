import React from 'react';
import Link from 'next/link';
import ExternalIcon from '@mui/icons-material/Launch';
import CloudDownloadRoundedIcon from '@mui/icons-material/CloudDownloadRounded';

interface IButtonLink {
	title: string;
	slug: string;
	isExternal?: boolean;
	hasExternalIcon?: boolean;
	isDisabled?: boolean;
	download?: boolean;
  icon?: React.ReactElement<{ src: string; alt: string }>;
}

export default function ButtonLink({ title, slug, isExternal, hasExternalIcon, isDisabled, download, icon }: IButtonLink) {
	// Button classes
	const disabledClass = !isDisabled ? 'lg:hover:bg-danube-600 cursor-pointer' : 'cursor-auto opacity-70';

	return (
		<Link
			href={!isDisabled ? slug : ''}
			target={isExternal ? '_blank' : '_self'}
			className={`bg-danube-800 text-danube-50 flex items-center gap-2 rounded-lg font-title font-semibold text-md px-4 py-2 w-fit transition-colors ${disabledClass}`}
			download={download ? 'true' : 'false'}
		>
			{icon && (
				<img
					src={icon.props.src}
					alt={icon.props.alt}
					style={{
						width: '20px',
						height: '20px',
						filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7498%) hue-rotate(232deg) brightness(97%) contrast(95%)',
					}}
				/>
			)}
			{title}
			{hasExternalIcon && <ExternalIcon />}
			{download && <CloudDownloadRoundedIcon />}
		</Link>
	);
}
