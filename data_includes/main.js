// Michael Wilson, November 2024
// CC-BY

PennController.ResetPrefix(null) // Shorten command names (keep this)
DebugOff()

var centered_justified_style = {
	'text-align': 'justify', 
	margin: '0 auto', 
	'margin-bottom': '3em',
	width: '30em'
}

Sequence(
	'info',
	SendResults(),
	'end'
)

newTrial('info',
	newHtml('info', 'demographics.html')
		.css(centered_justified_style)
		.inputWarning("You must enter a response for '%name%'.")
		.print()
		.log()
	,
	
	newButton('Next', 'Next')
		.center()
		.print()
		.wait(
			getHtml('info')
				.test.complete()
				.failure(
					getHtml('info').warn()
				)
		)
).setOption('countsForProgressBar', false)

newTrial('end',
	newText('You have recorded your participation; you may now close this window. Thank you!')
		.css(centered_justified_style)
		.center()
		.print()
	,
	
	newButton()
		.wait()
)
.setOption('countsForProgressBar', false)