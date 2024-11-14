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
	'name',
	SendResults(),
	'end'
)

newTrial('name',
	newText(
		'Thank you for participating in the experiment. To receive extra credit for your ' +
		'participation, please enter the requested information below. <b>If you do not enter ' +
		'this information correctly, we may not be able to identify you to award extra credit, ' +
		'so please make sure all information is accurate to the best of your knowledge.</b>'
	)
		.css(centered_justified_style)
		.print()
	,
	
	newText('Please enter your name as it appears on your course roster.')
		.css(centered_justified_style)
		.css('margin-bottom', '1em')
		.print()
	,
	
	newTextInput('name')
		.css('margin', 'auto')
		.css('margin-bottom', '3em')
		.log()
		.lines(1)
		.print()
	,
	
	newText('Please enter the name and number of the course for which you will receive extra credit.')
		.css(centered_justified_style)
		.css('margin-bottom', '1em')
		.print()
	,
	
	newTextInput('course')
		.css('margin', 'auto')
		.css('margin-bottom', '3em')
		.log()
		.lines(1)
		.print()
	,
	
	newText("Please enter the name of your course's instructor(s).")
		.css(centered_justified_style)
		.css('margin-bottom', '1em')
		.print()
	,
	
	newTextInput('instructor')
		.css('margin', 'auto')
		.css('margin-bottom', '3em')
		.log()
		.lines(1)
		.print()
	,
	
	newButton('Next', 'Next')
		.css('font-family', 'Helvetica, sans-serif')
		.css('font-size', '16px')
		.center()
		.print()
		.wait(
			getTextInput('name')
				.test.text(/[^\s]+/)
				.failure(
					newText('You must enter your name before continuing.')
						.css('margin', 'auto')
						.css('margin-bottom', '3em')
						.css('color', 'red')
						.print()
				),
			getTextInput('course')
				.test.text(/[^\s]+/)
				.failure(
					newText('You must enter your course name and number before continuing.')
						.css('margin', 'auto')
						.css('margin-bottom', '3em')
						.css('color', 'red')
						.print()
				),
			getTextInput('instructor')
				.test.text(/[^\s]+/)
				.failure(
					newText("You must enter your instructor's name before continuing.")
						.css('margin', 'auto')
						.css('margin-bottom', '3em')
						.css('color', 'red')
						.print()
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