import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import itemLists from './HomeItemLists';
import './Home.css';

export default function Home() {
  const [selectedItems, setSelectedItems] = useState(
    itemLists.map(item => ({ ...item, quantity: '', total: '' }))
  );

  const handleQuantityChange = (index, quantity) => {
    const updatedItems = selectedItems.map((item, i) => {
      if (i === index) {
        const updatedQuantity = parseInt(quantity, 10);

        // If the quantity is 0 or invalid, set total as empty
        const updatedTotal = updatedQuantity > 0 ? item.price * updatedQuantity : '';

        return {
          ...item,
          quantity: updatedQuantity >= 0 ? updatedQuantity : '',
          total: updatedTotal,
        };
      }
      return item;
    });

    setSelectedItems(updatedItems);
  };

  const calculateOverallTotal = () => {
    return selectedItems.reduce((acc, item) => acc + (item.total || 0), 0);
  };

  const calculateSelectedProductCount = () => {
    return selectedItems.filter(item => item.quantity > 0).length;
  };

  return (
    <>
      <section id='nav-section'>
        <NavBar />
      </section>

      <section id='products-lists'>
        <div className='container'>
          <div className='row d-flex'>
            <div className='col-lg-4 col-md-7'>
              <h3>Product List</h3>
            </div>
          </div>
        </div>

        <div className='container'>
          <div
            id='top_section'
            className='table-responsive sticky-top xs-margin-top-20px'
          >
            <div className='row'></div>
            <table cellPadding='0' cellSpacing='0' style={{ margin: 'auto' }}>
              <tbody>
                <tr>
                  <td>
                    <strong>Total Products Selected: </strong> {calculateSelectedProductCount()}
                  </td>
                  <td>
                    <strong>Overall Total: </strong> Rs {calculateOverallTotal().toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='row'>
            <div className='col-lg-12'>
              <div className='table-responsive'>
                <table
                  cellPadding='0'
                  cellSpacing='0'
                  className='pricelist_table pricelist_products'
                >
                  <thead>
                    <tr className='tr-row'>
                      <th>Image</th>
                      <th>Product</th>
                      <th align='text-center'>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      className='cart__total'
                      style={{
                        backgroundColor: '#F83700',
                        color: '#FFF',
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      <td colSpan='5'>
                        <h5>SOUND CRACKERS</h5>
                      </td>
                    </tr>
                    {selectedItems.map((item, index) => (
                      <tr key={index}>
                        <td className='text-center' width='5%'>
                          <img src={item.img} width='50px' alt={item.name} />
                        </td>
                        <td>{item.name}</td>
                        <td>Rs {item.price}</td>
                        <td>
                          <input
                            type='number'
                            name='quantity'
                            className='form-control'
                            min='1'
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(index, e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            name='total'
                            className='form-control'
                            readOnly
                            value={item.total !== '' ? ` ${item.total.toFixed(2)}` : ''}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
