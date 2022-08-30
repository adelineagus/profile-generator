//create function to generate data with HTML format

function templateHTML(cards){
    return `<!DOCTYPE html>
    <html>
        <head>
            <title>Profile Generator</title>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" type="text/css" href="style.css"/>
        </head>
    
        <body>
            <header>
                <h1>My Team<h1>
            </header>
            <main>
                ${cards}
               
            </main>
        </body>
    
    </html>`
}

module.exports=templateHTML;