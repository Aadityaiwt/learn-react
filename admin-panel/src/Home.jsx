import React from 'react'
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";


const Home = () => {

const data = [
  { name: "Jan", uv: 400, pv: 240 },
  { name: "Feb", uv: 300, pv: 139 },
  { name: "Mar", uv: 200, pv: 980 },
  { name: "Apr", uv: 278, pv: 390 },
  { name: "May", uv: 189, pv: 480 }
];

  return (
    <main className="main-container">
        <div className="main-title">
            <h3>DASHBOARD</h3>
        </div>

        <div className="main-cards">
            <div className="card">
                <div className="card-inner">
                <h3>PRODUCTS</h3>
                <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>300</h1>
            </div>

            <div className="card">
                <div className="card-inner">
                <h3>CATEGORIES</h3>
                <BsFillGrid3X3GapFill className='card_icon'/>
            </div>
            <h1>12</h1>
            </div>

            <div className="card">
                <div className="card-inner">
                <h3>CUSTOMERS</h3>
                <BsPeopleFill className='card_icon'/>
            </div>
            <h1>33</h1>
            </div>

            <div className="card">
                <div className="card-inner">
                <h3>ALERTS</h3>
                <BsFillBellFill className='card_icon'/>
            </div>
            <h1>42</h1>
            </div>
        </div>

        <div className="charts">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 10
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="pv" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 10
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="pv" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="lenear"
                    dataKey="uv"
                    stroke="#8884d8"
                    strokeWidth={3}
    />
            </LineChart>
            </ResponsiveContainer>
        </div>
    </main>
  )
}

export default Home
