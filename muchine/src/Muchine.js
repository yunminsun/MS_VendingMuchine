import React, { Component } from 'react';
import { isTSIndexSignature } from '@babel/types';

class Muchine extends Component {

    static defaultProps = {
        name : '알 수 없음',
    }

    state = {
        goods : ['음료1','음료2','음료3','음료4','음료5'
                ,'과자1','과자2','과자3','과자4','과자5'
                ,'과일1','과일2','과일3','과일4','과일5'],
        pay : [1000,2000,1500,1000,500
            ,1000,2000,1500,1000,500
            ,1000,2000,1500,1000,500],
        cashList : [10,50,100,500,1000],
        cash : 0,
    }

    render() {
        const goodsList1 = this.state.goods.slice(0,5).map(
            (goods,index) => (<td key={index}>{goods}&nbsp;</td>)
        )
        const goodsList2 = this.state.goods.slice(5,10).map(
            (goods,index) => (<td key={index}>{goods}&nbsp;</td>)
        )
        const goodsList3 = this.state.goods.slice(10,15).map(
            (goods,index) => (<td key={index}>{goods}&nbsp;</td>)
        )
        const payList1 = this.state.pay.slice(0,5).map(
            (pay,index) => (<td key={index}>{pay}&nbsp;</td>)
        )
        const payList2 = this.state.pay.slice(5,10).map(
            (pay,index) => (<td key={index}>{pay}&nbsp;</td>)
        )
        const payList3 = this.state.pay.slice(10,15).map(
            (pay,index) => (<td key={index}>{pay}&nbsp;</td>)
        )
        const cashList = this.state.cashList.map(
            (cash,index) => (<option value={cash} key={index}>{cash}</option>)
        )
        return (
            <div>
                {this.props.name}의 자판기<br /><br />
                <table>
                    <tbody>
                        <tr>
                            {goodsList1}
                        </tr>
                        <tr>
                            {payList1}
                        </tr>
                        <tr>
                            {goodsList2}
                        </tr>
                        <tr>
                            {payList2}
                        </tr>
                        <tr>
                            {goodsList3}
                        </tr>
                        <tr>
                            {payList3}
                        </tr>
                    </tbody>
                </table>
                <hr />
                <table>
                    <tbody>
                        <tr>
                           <td colpan={3} lowpan={2}><button>나온상품명</button></td>
                           <td>
                               <select>
                                    <option >현금</option>
                                    {cashList}
                               </select>
                               &nbsp;
                               <button>입력</button>
                            </td>
                        </tr>
                        <tr>
                           
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Muchine;