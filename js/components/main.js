import React, { Component } from 'react';

export class ReceiptHeader extends Component {
  render() {
    return (
      <thead>
      <tr>
      <th>Nazwa</th>
      <th>Cena</th>
      <th>Ilosc</th>
      <th>Łączna cena</th>
    </tr>
    </thead>
  );
  }
}
