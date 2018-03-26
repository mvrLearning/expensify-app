import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { removeExpense,editExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
    console.log(props);
    return ( 
        <div>
            <ExpenseForm
            expense={props.expense}
             onSubmit={(expense)=>{
                props.dispatch(editExpense(props.expense.id,expense));
                props.history.push('/');
            }}/>
            <button onClick={()=>{
                 props.dispatch(removeExpense({id:props.expense.id}))
                props.history.push('/');
            }}>Remove</button>
        </div>
    )
}
const mapStateToProps = (state,props)=>{
    return{
        expense:state.expenses.find((expense)=>{
            return expense.id ===  props.match.params.id
        })
    }
};
export default connect(mapStateToProps)(EditExpensePage);