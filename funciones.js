const HOJA = SpreadsheetApp.openById('1s3Z2pSSctjgKYUQbeE6c7K1BShkY1gLZv82z2YMK-_k').getActiveSheet();

function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google App Script');
}

//funcion para usar el metodo post la cual envia los datos del formulario
function doPost(datos)
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google App Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();   
}

function obtenerContactos()
{
    return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre,apellidos,correo, telf)
{
    HOJA.appendRow([nombre, apellidos, correo, telf]);
}

function borrarContacto(numFila)
{
    HOJA.deleteRow(numFila);
}

function modificarContacto(numFila, datos)
{
    let celdas = HOJA.getRange('A'+numFila+':D'+numFila);
    celdas.setValues([[datos.nombre, datos.apellidos, datos.correo, datos.telf]]);
}