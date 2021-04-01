const lineByLine = require("line-by-line");
runLineByLineDemo();


// Main function.
function runLineByLineDemo()
{
	var targetFilePath = readTargetPath();
	var streamOpts = {encoding: "utf8", skipEmptyLines: true};
	var demoResult = {linesDisplayed: 0, successful: true, message: ""};
	var lineStream = new lineByLine(targetFilePath, streamOpts);
	
	
	// Line stream error.
	lineStream.on('error', function (readErr)
	{
		demoResult.successful = false;
		demoResult.message = readErr.message;
		lineStream.close();
	});
	
	
	// Display current line.
	lineStream.on('line', function (currentLine)
	{
		console.log(currentLine);
		demoResult.linesDisplayed += 1;
	});
	
	
	// End reached.
	lineStream.on('end', function()
	{
		handleDivider(demoResult.linesDisplayed);
		handleEndResult(demoResult);
	});
}


// Displays output divider.
function handleDivider(dispCount)
{
	if (dispCount > 0)
	{
		console.log("");
		console.log("---");
		console.log("");
	}
}


// Displays result message.
function handleEndResult(resObj)
{
	if (resObj.successful === true)
	{
		console.log("Complete");
	}
	else
	{
		console.log(resObj.message);
	}
}



// Reads file path argument.
function readTargetPath()
{
	var retArg = "";
	var pathRes = "";
	
	if (process.argv.length > 2)
	{
		// Argument exists.
		retArg = process.argv[2];
	}
	
	if (typeof retArg === "string" && retArg.length > 0)
	{
		// Use entered path.
		pathRes = retArg;
	}
	else
	{
		// Default.
		pathRes = "./example.txt";
	}
	
	return pathRes;
}