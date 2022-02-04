import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let openReference = vscode.commands.registerCommand('synthv-script-helper.openReference', ()=>{
		const panel = vscode.window.createWebviewPanel(
			"test",
			"Test",
			vscode.ViewColumn.One,
			{
				enableScripts: true
			}
		);

		panel.webview.html = getWebviewContent();

	});

	context.subscriptions.push(openReference);
}

export function deactivate() {}

function getWebviewContent() {
	return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height">
		<title></title>
		
	</head>
	<body style="padding: 0px;">
	
	<iframe src="https://resource.dreamtonics.com/scripting/" sandbox="allow-downloads allow-forms allow-same-origin allow-modals allow-scripts" frameborder="0" width="100%" style="overflow: hidden; height: 100%; width: 100%; position: absolute; margin: 0%; padding: 0%;">
	
	</body>
	</html>
	`;
}
