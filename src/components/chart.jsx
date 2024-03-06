import React from 'react'
import { LineChart, Tooltip, XAxis, YAxis, Line, Legend } from 'recharts'


const Chart = () => {

    const data = [
        {
          "name": "January",
          "savings": 5000,
          "account": 32000,
          "expenses": 0
        },
        {
            "name": "Feburary",
            "savings": 15000,
            "account": 30000,
            "expenses": 0
          },
          {
            "name": "March",
            "savings": 20000,
            "account": 35000,
            "expenses": 0
          },
          {
            "name": "April",
            "savings": 10000,
            "account": 24000,
            "expenses": 0
          },
          {
            "name": "May",
            "savings": 23000,
            "account": 50000,
            "expenses": 0
          },
          {
            "name": "June",
            "savings": 42000,
            "account": 60000,
            "expenses": 0
          },
      
      ]

      data.forEach((obj) => {
        obj.expenses = obj.account - obj.savings;
      });
  return (
 <>
                        
<LineChart width={800} height={350} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

  <XAxis dataKey="name" />
  <YAxis />
  <Legend />
  <Tooltip />
  
  <Line type="monotone" dataKey="account" stroke="#82ca9d" />
  <Line type="monotone" dataKey="savings" stroke="#8884d8" />
  <Line type="monotone" dataKey="expenses" stroke="#F8333C" />

</LineChart>
 
 
 
 
 
 </>
  )
}

export default Chart