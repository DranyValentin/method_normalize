Element.prototype.normalize = function() {
	$element = this
	var length = $element.textContent.length
	var count = 0
	
	while ( count < $element.childNodes.length ) {

		if ( $element.childNodes[count].nodeType == 3 ) {
			var arrElText = []

			for ( var i = 0; i < length; i++ )
				arrElText[i] = $element.textContent[i]

			$element.textContent = arrElText.join('')
		}

		count++
	}
}