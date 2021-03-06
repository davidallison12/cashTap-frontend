import React, { useState, useEffect, useContext } from "react";
import BillCard from "./BillCard";
import AddBillForm from './AddBillForm'
import EditBillForm from "./EditBillForm";
import AuthContext from "../context/AuthContext";
function BillsContainer(props) {
const {authTokens} = useContext(AuthContext)
    const [editForm, setEditForm] = useState(false)
    const [billForEdit, setBillForEdit] = useState(null)
  // console.log(props.billsData[0].bill_type)
  const ListBills = props.billsData.map((bill, i) => {
    //Will use flex inside the div to create a modified "row"
    return <BillCard key={bill.id} bill={bill} deleteBill={props.deleteBill}  setEditForm={setEditForm} editForm={editForm} setBillForEdit={setBillForEdit}/>;
  });
  // const listUsers = props.currentUser.map(user, i) => {
  //   return <h1>user.firs</h1>
  // })

  // useEffect(() => {
  //   props.getCurrentUser()
  // })
  return (
    
    <div className="block">
      {props.isAddBill ?
      <AddBillForm  baseUrl={props.baseUrl} addBill={props.addBill} getBills={props.getBills} user={props.user} setIsAddBill={props.setIsAddBill} isAddBill={props.isAddBill}/>:
      <>
      {Array.isArray(props.currentUser) &&
<div className="box is-info">
      <h1 className="is-size-2 has-text-weight-semibold">{props.currentUser.first_name}'s Bills </h1>
      </div>
    }
      <div className="space-y-2 block">{ListBills}</div>
      
      {editForm &&

      <EditBillForm baseUrl={props.baseUrl} setEditForm={setEditForm} billData={billForEdit} allBillsData={props.billsData} handleUpdatedBills={props.handleUpdatedBills} authTokens={authTokens}/>
    }
    </>
}
    </div>
    
    );
  }


export default BillsContainer;
