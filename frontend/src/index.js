import { io } from 'socket.io-client';

const ws = io('http://localhost:3000');
const $table = document.createElement('table');
$table.className = 'table table-striped';
const $tableHeaders = ['title', 'value', 'normalValue', 'isOk', 'comment'];
const $thead = document.createElement('thead');
const $headerRow = document.createElement('tr');
$tableHeaders.forEach($header => {
  const $th = document.createElement('th');
  $th.setAttribute('scope', 'col');
  $th.textContent = $header;
  $headerRow.appendChild($th);
});
$thead.appendChild($headerRow);

$table.appendChild($thead);
const $contentDiv = document.querySelector('#content');
$contentDiv.appendChild($table);

const $tbody = document.createElement('tbody');

ws.on('monitoring', event => {
  $tbody.innerHTML = '';
  event.parameters.forEach(parameter => {
    parameter.normalValue = Object.values(parameter.normalValue).join(' - ');
    const $tr = document.createElement('tr');
    if (!parameter.isOk) {
      $tr.className = 'table-danger';
    }
    $tableHeaders.forEach(headerName => {
      const $td = document.createElement('td');
      $td.textContent = parameter[headerName];
      $tr.appendChild($td);
    });
    $tbody.appendChild($tr);
  });
  $table.appendChild($tbody);
});