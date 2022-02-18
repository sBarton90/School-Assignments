function CreateTable(){

    var rows = document.getElementById("rows").value;
    var columns = document.getElementById("columns").value;
    var theader = '<table border="1 solid black">\n';
    var tbody = '';

    if (columns == 0 && rows == 0) {
      alert("Please enter a value for columns and rows");
    } else if (columns == 0) {
      alert("Please enter a value for columns");
    } else if (rows == 0) {
      alert("Please enter a value for rows");
    }

    for (var i = 0; i < rows; i++) {
        tbody += '<tr>';
        for (var j = 0; j < columns; j++)
        {
            tbody += '<td>';
            tbody += i + ',' + j;
            tbody += '</td>'
        }
        tbody += '</tr>\n';
    }
    var tfooter = '</table>';
    document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;
}
