const copyCodeButtons = $('.copy-code-button');
copyCodeButtons.each(function(index, copyCodeButton) {
  copyCodeButton.addEventListener('click', () => {
    // Copy the code to the user's clipboard
    window.navigator.clipboard.writeText(copyCodeButton.value);

    // Update the icon shown
	let copy_svg = $(this).find('svg.octicon-copy');
	copy_svg.css("display", "none");
	let check_svg = $(this).find('svg.octicon-check');
	check_svg.css("display", "");

    // Reset the button's icon
    setTimeout(() => {
      copy_svg.css("display", "");
      check_svg.css("display", "none");
    }, 500);
  });
});
