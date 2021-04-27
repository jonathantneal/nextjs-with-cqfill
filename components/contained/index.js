import { containerCss, contentCss, thumbCss, titleCss, summaryCss } from './contained.module.css'

export default function Contained({ image, title, summary }) {
	return (
		<div className={containerCss}>
			<img className={thumbCss} src={image} />
			<span className={contentCss}>
				<h3 className={titleCss}>{title}</h3>
				<p className={summaryCss}>{summary}</p>
			</span>
		</div>
	)
}