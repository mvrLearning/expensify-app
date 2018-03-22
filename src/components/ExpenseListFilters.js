import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter,sortByDate,sortByAmount} from '../actions/filters';
const ExpenseListFilters= (props) =>(
    <div>
        <input type="text" Value={props.filters.text} onChange={(e)=>{
            props.dispatch(setTextFilter(e.target.value))
        }}/>
        <select value={props.filters.sortBy} onChange={(e)=>{
            e.target.value === 'amount'?props.dispatch(sortByAmount()):props.dispatch(sortByDate())
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);



const mapStateToProps = (state)=>{
    return{
        filters:state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)