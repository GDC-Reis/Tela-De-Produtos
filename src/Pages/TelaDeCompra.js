import './TalaDeCompras.css';

import PageHeader from '../Components/PageHeader';
import PageTitle from '../Components/PageTitle';
import Summary from '../Components/Summary';
import TableRow from '../Components/TableRow';

const TelaDeCompra = () => {
    return ( 
        <>
        <PageHeader />
        <main>
          <PageTitle data={'Seu carrinho'} />
          <div className='content'>
            <section>
              <table>
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                    <th>-</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow />
                </tbody>
              </table>
            </section>
            <aside>
              <Summary />
            </aside>
          </div>
        </main>
      </>
     );
}
 
export default TelaDeCompra;