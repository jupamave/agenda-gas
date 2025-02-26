function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google App Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
    let hoja = SpreadsheetApp.openById('1s3Z2pSSctjgKYUQbeE6c7K1BShkY1gLZv82z2YMK-_k').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}